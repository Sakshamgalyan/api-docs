import React from 'react';
// import { API } from '@stoplight/elements';
// import '@stoplight/elements/styles.min.css';

export default function CurlRunner() {
  return (
    <div style={{ marginTop: '2rem' }}>
      <API apiDescriptionUrl="/openapi.yaml" router="hash" />
    </div>
  );
}
