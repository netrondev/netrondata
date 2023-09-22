import Link from "next/link";
import { Container } from "./Container";
import { AppVersion } from "./Version";

export function Footer() {
  return (
    <>
      <div className="flex-1" />
      <footer className="mt-20 py-5 text-neutral-400">
        <Container>
          <div className="mb-20 hidden">
            <nav
              className="flex flex-row flex-wrap gap-16 md:gap-24"
              aria-label="footer"
            >
              <div>
                <strong className="inline-block pb-5 font-mono text-sm uppercase tracking-wide">
                  Learn
                </strong>
                <ul className="flex flex-col gap-2">
                  <li className="">
                    <Link
                      className="text-neutral-500 transition hover:text-sky-500"
                      href="/workshops"
                    >
                      Pro Workshops
                    </Link>
                  </li>
                  <li className="">
                    <Link
                      className="text-neutral-500 transition hover:text-sky-500"
                      href="/tutorials"
                    >
                      Free Tutorials
                    </Link>
                  </li>
                  <li className="">
                    <Link
                      className="text-neutral-500 transition hover:text-sky-500"
                      href="/tips"
                    >
                      Tips
                    </Link>
                  </li>
                  <li className="">
                    <Link
                      className="text-neutral-500 transition hover:text-sky-500"
                      href="/articles"
                    >
                      Articles
                    </Link>
                  </li>
                  <li className="">
                    <Link
                      className="text-neutral-500 transition hover:text-sky-500"
                      href="/concepts"
                    >
                      Concepts
                    </Link>
                  </li>
                  <li className="">
                    <Link
                      className="text-neutral-500 transition hover:text-sky-500"
                      href="/search"
                    >
                      Search
                    </Link>
                  </li>
                </ul>
              </div>
              <div>
                <strong className="inline-block pb-5 font-mono text-sm uppercase tracking-wide">
                  About
                </strong>
                <ul className="flex flex-col gap-2">
                  <li className="">
                    <Link
                      className="text-neutral-500 transition hover:text-sky-500"
                      href="/products"
                    >
                      All Products
                    </Link>
                  </li>
                  <li className="">
                    <Link
                      className="text-neutral-500 transition hover:text-sky-500"
                      href="/faq"
                    >
                      FAQ
                    </Link>
                  </li>
                  <li className="">
                    <Link
                      className="text-neutral-500 transition hover:text-sky-500"
                      href="/credits"
                    >
                      Credits
                    </Link>
                  </li>
                </ul>
              </div>
              <div>
                <strong className="inline-block pb-5 font-mono text-sm uppercase tracking-wide">
                  Tools
                </strong>
                <ul className="flex flex-col gap-2">
                  <li className="">
                    <Link
                      className="text-neutral-500 transition hover:text-sky-500"
                      href="/typescript-learning-path"
                    >
                      Learning Path
                    </Link>
                  </li>
                  <li className="">
                    <Link
                      className="text-neutral-500 transition hover:text-sky-500"
                      href="/vscode-extension"
                    >
                      VSCode Extension
                    </Link>
                  </li>
                  <li className="">
                    <Link
                      className="text-neutral-500 transition hover:text-sky-500"
                      href="/ts-reset"
                    >
                      TS Reset
                    </Link>
                  </li>
                </ul>
              </div>
              <div>
                <strong className="inline-block pb-5 font-mono text-sm uppercase tracking-wide">
                  Contact
                </strong>
                <ul className="flex flex-col gap-2">
                  <li className="">
                    <Link
                      className="text-neutral-500 transition hover:text-sky-500"
                      href="/contact"
                    >
                      Contact Us
                    </Link>
                  </li>
                  <li className="">
                    <Link
                      className="text-neutral-500 transition hover:text-sky-500"
                      href="mailto:team@totaltypescript.com"
                    >
                      Email Support
                    </Link>
                  </li>
                </ul>
              </div>
            </nav>
          </div>

          <AppVersion />
        </Container>
      </footer>
    </>
  );
}
