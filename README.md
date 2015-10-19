# Randicon

Randicon generates gravatar-like, slack-like icons based on the string hashcode.

## Usage

Use bower:


````bash
bower install randicon
````

or include ```dist/randicon.min.js``` into your document:

````html
  <!-- (1) Include randicon.min.js -->
  <script src="dist/randicon.min.js"></script>

  <svg id="icon1" width="64" height="64"/>

  <script>
    // (2) Call randicon(id, string)
    randicon("#icon1", "johnny-bravo@acme.com");
  </script>
````

Please note that ```randicon.min.js``` includes ```snap.svg.min.js```.

## Example

![Example Output](output.png)

## Development

````bash
npm install
bower install
gulp
````

## License

MIT

## Credits

Shoutout to @[Snapsvg](https://twitter.com/Snapsvg) guys.
