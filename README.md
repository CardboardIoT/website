# Cardboard IoT website

## Install

    npm install

## Make changes

    npm run dev

Watches files for changes, re-builds and serves at http://localhost:8000/

## Deploy

    npm run build
    npm run deploy

`deploy` requires access to the `cardboardiot.surge.sh` domain.

## Where is everything

<pre>
  build     Generated site
            (do not commit, should be deployed)
  css       Individual CSS files
            (concatenated on build)
  pages     Individual page content
  partials  Reusable chunks of HTML
            (include like {{> partial_name }})
  static    Files copied to build as-is
  templates Site layout
</pre>
