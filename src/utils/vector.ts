interface VectorType {
    x?: number,
    y?: number,
    z?: number,
    w?: number | undefined
  }
  
  export class Vector {
    x = 0;
    y = 0;
    z = 0;
    w = 0;
    type = "vector"
  
    constructor(optional?: Vector | VectorType) {
      if (optional) {
        if (optional.x) { this.x = optional.x }
        if (optional.y) { this.y = optional.y }
        if (optional.z) { this.z = optional.z }
        if (optional.w) { this.w = optional.w }
      }
    }
  
    length() {
      return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z)
    }
  
    setLength(length: number) {
      this.normalize();
      this.scale(length)
    }
  
    normalize() {
      const lengthval = this.length()
      if (lengthval != 0) {
        this.x /= lengthval;
        this.y /= lengthval;
        this.z /= lengthval;
        return true
      } else {
        return false
      }
    }
  
    angle(bvector: Vector) {
      //returns the Angle between two vectors. 0-2PI
      //we create some temporary vectors so we can normalize them savely
      const anorm = new Vector(this)
      anorm.normalize()
      const bnorm = new Vector(bvector)
      bnorm.normalize()
      const dotval = anorm.dot(bnorm);
      return Math.acos(dotval);
    }
  
    dot(vectorB: Vector) {
      //returns the total from multiplying two vectors together. dotproduct
      return this.x * vectorB.x + this.y * vectorB.y + this.z * vectorB.z;
    }
  
    cross(vectorB: Vector) {
      const tempvec = new Vector(this)
      tempvec.x = (this.y * vectorB.z) - (this.z * vectorB.y);
      tempvec.y = (this.z * vectorB.x) - (this.x * vectorB.z);
      tempvec.z = (this.x * vectorB.y) - (this.y * vectorB.x);
      this.x = tempvec.x
      this.y = tempvec.y
      this.z = tempvec.z
      this.w = tempvec.w
    }
  
    crossproduct(vectorB: Vector) {
    //   let  q1, r1, p2, q2, r2;
      const p1 = this.x
      const q1 = this.y
      const r1 = this.z
      const p2 = vectorB.x
      const q2 = vectorB.y
      const r2 = vectorB.z
      
      const a = (q1 * r2) - (q2 * r1);
      const b = (r1 * p2) - (r2 * p1);
      const c = (p1 * q2) - (p2 * q1);
      const cross = Math.pow(a, 2) + Math.pow(b, 2) + Math.pow(c, 2);
      const crossres = Math.sqrt(cross);
      return crossres;
    }
  
    QuaternionMultiply(vectorB: Vector) {
      const out = new Vector();
      out.w = this.w * vectorB.w - this.x * vectorB.x - this.y * vectorB.y - this.z * vectorB.z;
      out.x = this.w * vectorB.x + this.x * vectorB.w + this.y * vectorB.z - this.z * vectorB.y;
      out.y = this.w * vectorB.y - this.x * vectorB.z + this.y * vectorB.w + this.z * vectorB.x;
      out.z = this.w * vectorB.z + this.x * vectorB.y - this.y * vectorB.x + this.z * vectorB.w;
      this.x = out.x
      this.y = out.y
      this.z = out.z
      this.w = out.w
    }
  
    rotate(inputaxis: Vector, inputangle: number, center?: Vector | undefined) {
      const vector = new Vector(this)
      vector.w = 0
  
      if (center) {
        if (center.type != "vector") { console.error("error: rotate center is not type vector") }
        // if a center is defined, we use this instead of assuming 0,0,0 as center.
        // this is done by a quick translate to offset the center to 0,0,0 temporarily, and reverted at the end.
        vector.x -= center.x
        vector.y -= center.y
        vector.z -= center.z
      }
  
      const axis = new Vector({
        x: inputaxis.x * Math.sin(inputangle / 2),
        y: inputaxis.y * Math.sin(inputangle / 2),
        z: inputaxis.z * Math.sin(inputangle / 2),
        w: Math.cos(inputangle / 2)
      }
      )
  
      const axisInv = new Vector({ x: -axis.x, y: -axis.y, z: -axis.z, w: axis.w })
  
      axis.QuaternionMultiply(vector)
      axis.QuaternionMultiply(axisInv)
  
      this.x = axis.x
      this.y = axis.y
      this.z = axis.z
  
      if (center) {
        // if a center is defined, we use this instead of assuming 0,0,0 as center.
        // this is done by a quick translate to offset the center to 0,0,0 temporarily, and reverted at the end.
        this.x += center.x
        this.y += center.y
        this.z += center.z
      }
  
    }
  
    scale(scale: number) {
      this.x *= scale
      this.y *= scale
      this.z *= scale
    }
  }