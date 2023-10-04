import React from "react";
import { Alert } from "./Alert";
import { Section } from "./Section";

export default { title: "Alert" };

export const AlertSamples = () => (
  <Section className="flex flex-col">
    <Alert severity="error">Error!</Alert>
    <Alert severity="success">Success!</Alert>
    <Alert severity="info">Info</Alert>
    <Alert severity="warning">Warning</Alert>
  </Section>
);
