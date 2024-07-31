## Lavender shades
#241e64
#b3ace3
#de89ff
#0d0c50
#f9edfa
#201d67
#bfa8bc
#211e67
#cfd3f3
#c8b3d5
#ffffff
#fff9fc

Selected Color Palette for Website Elements
Main Background Color

Hex: #0d0c50 (Dark indigo blue)
Usage: Used as the primary background color for the website.
Main Text Color

Hex: #ffffff (White)
Usage: Main text color to ensure excellent readability against the dark background.
Text Color on Hover

Hex: #b3ace3 (Light lavender)
Usage: Used for hover states on text links to provide a soft highlight effect.
Main Card Color

Hex: #bfa8bc (Muted mauve)
Usage: Background color for primary content cards.
Main Card Box Shadow Color

Hex: #201d67 (Very dark blue, almost black)
Opacity: 50%
Usage: Shadow for main cards to add depth and distinction.
Sub-Card Color

Hex: #cfd3f3 (Light periwinkle)
Usage: Background color for secondary cards or smaller widgets.
Sub-Card Box Shadow Color

Hex: #211e67 (Dark indigo blue)
Opacity: 50%
Usage: Subtle shadow for secondary cards to create a layered visual effect.
Main Card Text Color

Hex: #0d0c50 (Dark indigo blue)
Usage: Text color for main cards for contrast against the lighter card background.
Button Color

Hex: #de89ff (Bright lavender)
Usage: Background color for buttons to make them stand out as interactive elements.
Button Text Color

Hex: #ffffff (White)
Usage: Ensures readability on the bright button background.

## Shades of navy-blue
:root {
  --navy-blue: #0A192F;
  --slate-blue: #172A45;
  --light-gray: #CCD6F6;
  --bright-blue: #1CA0F1;
  --white: #FFFFFF;
  --hover-blue: #4DAAFF;
}

body {
  background-color: var(--navy-blue);
  color: var(--light-gray);
}

button {
  background-color: var(--bright-blue);
  color: var(--white);
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  transition: background-color 0.3s ease;
}

button:hover {
  background-color: var(--hover-blue);
}

div:hover {
  box-shadow: 0 4px 8px rgba(28, 160, 241, 0.5); /* Using RGBA for soft blue shadow */
}

## shades for pastel-pink
:root {
  --pastel-pink: #FFD1DC;
  --light-pastel-pink: #FFE4E9;
  --dark-gray: #494949;
  --deeper-pastel-pink: #FFB8C6;
  --nearly-white: #FAFAFA;
  --lighter-pastel-pink: #FFEBF0;
  --soft-pink: #FFC0CB;
}

body {
  background-color: var(--pastel-pink);
  color: var(--dark-gray);
  font-family: Arial, sans-serif;
}

h1, h2, h3 {
  color: var(--dark-gray);
}

button {
  background-color: var(--deeper-pastel-pink);
  color: var(--nearly-white);
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  transition: background-color 0.3s ease;
}

button:hover {
  background-color: var(--lighter-pastel-pink);
}

a:hover {
  color: var(--deeper-pastel-pink);
}

.card {
  background-color: var(--light-pastel-pink);
  box-shadow: 0 4px 8px rgba(255, 192, 203, 0.5); /* Using RGBA for soft pink shadow */
}

.card:hover {
  box-shadow: 0 8px 16px rgba(255, 192, 203, 0.75); /* Deeper shadow on hover */
}