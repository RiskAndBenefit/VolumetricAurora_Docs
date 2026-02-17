import "./DocsPage.css";
import StepImage from "../components/StepImage.jsx";

export default function CommonParametersPage() {
  return (
    <section className="hero">
      <h1 className="heroTitle">Common Parameters</h1>

      <p className="heroDesc">
        These parameters are shared across all aurora types (Noise, Spline, and Flow). Understanding these core
        settings will help you shape, position, and fine-tune any aurora in your scene.
      </p>

      <hr className="heroDivider heroDividerTop" />

      {/* CORE SETTINGS */}
      <h2 className="heroSubTitle">CORE SETTINGS</h2>
      <p className="heroText">
        Fundamental parameters that control the basic appearance and behavior of all aurora types.
      </p>

      <div className="heroTableWrap">
        <table className="heroTable">
          <thead>
            <tr>
              <th>Parameter</th>
              <th>Description</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Shape Texture</td>
              <td>
                The base texture that defines the aurora's pattern. Usage varies by type:
                <br />
                • <strong>Noise:</strong> Continuous noise texture for curtain ripples
                <br />
                • <strong>Spline:</strong> Distance field texture storing path information
                <br />
                • <strong>Flow:</strong> Particle emission map defining spawn regions
              </td>
            </tr>
            <tr>
              <td>Intensity</td>
              <td>Overall brightness of the aurora. Increase this if the aurora appears too faint.</td>
            </tr>
            <tr>
              <td>Density</td>
              <td>Controls how thick or opaque the aurora appears. Higher values create denser, more solid aurora.</td>
            </tr>
            <tr>
              <td>Speed</td>
              <td>Animation speed multiplier for all aurora movement and effects.</td>
            </tr>
          </tbody>
        </table>
      </div>

      <hr className="heroDivider" />

      {/* COLOR SETTINGS */}
      <h2 className="heroSubTitle">COLOR SETTINGS</h2>
      <p className="heroText">
        Control the color gradient of the aurora from bottom to top, creating realistic atmospheric color
        transitions.
      </p>

      <div className="heroTableWrap">
        <table className="heroTable">
          <thead>
            <tr>
              <th>Parameter</th>
              <th>Description</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Bottom Color</td>
              <td>Color at the bottom edge of the aurora. Typically bright cyan or green for natural auroras.</td>
            </tr>
            <tr>
              <td>Mid Color</td>
              <td>Color in the middle section of the aurora, creating a transitional gradient.</td>
            </tr>
            <tr>
              <td>Top Color</td>
              <td>Color at the top edge of the aurora. Typically darker purple or blue for natural auroras.</td>
            </tr>
            <tr>
              <td>Mid Color Height</td>
              <td>
                Height range where the middle color appears. X value sets start height, Y value sets end height (0–1
                range). Keep values close together for a narrow transition band.
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <hr className="heroDivider" />

      {/* POSITION AND SIZE */}
      <h2 className="heroSubTitle">POSITION AND SIZE</h2>
      <p className="heroText">
        Define the physical dimensions and placement of the aurora in your world space.
      </p>

      <div className="heroTableWrap">
        <table className="heroTable">
          <thead>
            <tr>
              <th>Parameter</th>
              <th>Description</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Altitude</td>
              <td>Height of the aurora above ground level in kilometers. Natural auroras typically appear at 100–300 km altitude.</td>
            </tr>
            <tr>
              <td>Aurora Area Extent</td>
              <td>
                Horizontal extent of the aurora area. Larger values spread the aurora over a wider area. Adjust based
                on your scene scale.
              </td>
            </tr>
            <tr>
              <td>Aurora Height</td>
              <td>Vertical height of the aurora volume. Determines how tall the curtain or band appears.</td>
            </tr>
            <tr>
              <td>Height Falloff</td>
              <td>
                Controls how quickly the aurora fades toward the top. Higher values create faster fade, making the top
                less visible.
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <h3 className="heroSubTitleSm">EDGE FADE SETTINGS</h3>
      <p className="heroText">
        Control how the aurora fades out at the edges of the defined area to create smooth boundaries.
      </p>

      <div className="heroTableWrap">
        <table className="heroTable">
          <thead>
            <tr>
              <th>Parameter</th>
              <th>Description</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Edge Fade Mode</td>
              <td>
                <strong>Radial:</strong> Fades out in a circular pattern from the center (natural for omnidirectional auroras).
                <br />
                <strong>Box:</strong> Fades out based on X and Y distances independently (rectangular pattern, better for directional auroras).
              </td>
            </tr>
            <tr>
              <td>Edge Fade Softness</td>
              <td>
                Softness of the edge fade. 0 creates a sharp cutoff, 1 creates a smooth, gradual fade. Values around
                0.5 work well for most cases.
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <hr className="heroDivider" />

      {/* APPEARANCE */}
      <h2 className="heroSubTitle">APPEARANCE</h2>
      <p className="heroText">
        Advanced appearance settings for fine-tuning the aurora's visual style and enhancing realism.
      </p>

      <h3 className="heroSubTitleSm">FILM GRAIN</h3>
      <p className="heroText">
        Adds subtle film grain noise for a more organic, less digital appearance. Minimal performance impact.
      </p>

      <div className="heroTableWrap">
        <table className="heroTable">
          <thead>
            <tr>
              <th>Parameter</th>
              <th>Description</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Enable Film Grain</td>
              <td>Toggle film grain effect on or off.</td>
            </tr>
            <tr>
              <td>Film Grain Intensity</td>
              <td>
                Strength of the grain noise (0.0–1.0). Values around 0.1–0.2 add subtle texture without being
                distracting.
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <h3 className="heroSubTitleSm">STRUCTURE COLORING</h3>
      <p className="heroText">
        Applies additional color tinting to dense structural regions of the aurora, creating richer, more complex
        color palettes.
      </p>

      <div className="heroTableWrap">
        <table className="heroTable">
          <thead>
            <tr>
              <th>Parameter</th>
              <th>Description</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Enable Structure Coloring</td>
              <td>Toggle structure coloring on or off.</td>
            </tr>
            <tr>
              <td>Use Straight Alpha Palette</td>
              <td>
                Use straight alpha blending for the color palette. Affects how structure colors blend with the base
                colors.
              </td>
            </tr>
            <tr>
              <td>Soft Tint</td>
              <td>
                Tint color applied to the outer edges of dense structures. Use complementary colors for interesting
                effects (e.g., green aurora with pink tint).
              </td>
            </tr>
            <tr>
              <td>Core Tint</td>
              <td>
                Tint color applied to the densest core regions of structures. Typically brighter or more saturated than
                soft tint.
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <h3 className="heroSubTitleSm">TONE ADJUSTMENT</h3>
      <p className="heroText">
        Fine-tune the tone curve, contrast, and saturation of the aurora emission for precise color control.
      </p>

      <div className="heroTableWrap">
        <table className="heroTable">
          <thead>
            <tr>
              <th>Parameter</th>
              <th>Description</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Emissive Tone Pivot</td>
              <td>
                Pivot point for tone redistribution. Values below the pivot get darker, values above get brighter.
                Lower values (0.01–0.03) recommended for most auroras.
              </td>
            </tr>
            <tr>
              <td>Emissive Contrast</td>
              <td>
                Contrast strength of the aurora emission. 1.0 is neutral, higher values increase contrast and create
                more dramatic lighting.
              </td>
            </tr>
            <tr>
              <td>Emissive Saturation</td>
              <td>
                Color saturation multiplier. 0.0 creates grayscale, 1.0 is natural, values above 1.0 create
                oversaturated, vibrant colors.
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <h3 className="heroSubTitleSm">EMISSIVE STRUCTURE</h3>
      <p className="heroText">
        Enhances brightness on dense structural regions, creating dramatic bright bands and more defined aurora
        curtains.
      </p>

      <div className="heroTableWrap">
        <table className="heroTable">
          <thead>
            <tr>
              <th>Parameter</th>
              <th>Description</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Enable Emissive Structure</td>
              <td>
                Toggle enhanced brightness on dense structures. Slightly more expensive but creates significantly more
                dramatic lighting.
              </td>
            </tr>
            <tr>
              <td>Emissive Structure Pivot</td>
              <td>
                Density threshold for determining bright structures. Lower values (0.01–0.03) make more areas glow,
                higher values create selective highlights.
              </td>
            </tr>
            <tr>
              <td>Emissive Structure Selectivity</td>
              <td>
                Selectivity of structure brightness. Higher values (1.5–3.0) make only well-defined bands glow. Lower
                values (0.5–1.0) create softer, more diffuse glow.
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <hr className="heroDivider" />

      {/* USAGE TIPS */}
      <h2 className="heroSubTitle">USAGE TIPS</h2>
      <p className="heroText">
        Best practices for working with common parameters across all aurora types.
      </p>

      <h3 className="heroSubTitleSm">COLOR DESIGN</h3>
      <ul className="heroBullets">
        <li>
          <strong>Natural Color Progression:</strong> Natural auroras are typically brighter at the bottom (green/cyan)
          and darker at the top (purple/blue). Follow this pattern for realistic results.
        </li>
        <li>
          <strong>Mid Color Transitions:</strong> Keep Mid Color Height X and Y values close together (e.g., 0.5–0.6)
          for a narrow, natural-looking transition band.
        </li>
        <li>
          <strong>Structure Coloring:</strong> Use complementary colors for structure tints (e.g., green base with
          pink/magenta tints) to create visually rich auroras.
        </li>
      </ul>

      <h3 className="heroSubTitleSm">BALANCING INTENSITY AND DENSITY</h3>
      <ul className="heroBullets">
        <li>
          <strong>Faint Aurora:</strong> Increase Intensity first, then adjust Density if needed. High intensity with
          low density creates ethereal, wispy aurora.
        </li>
        <li>
          <strong>Bright Bands:</strong> Combine high Density (1.0–2.0) with moderate Intensity and enable Emissive
          Structure for dramatic, well-defined curtains.
        </li>
        <li>
          <strong>Soft Glow:</strong> Use low Density (0.3–0.7) with high Intensity for diffuse, atmospheric glow.
        </li>
      </ul>

      <h3 className="heroSubTitleSm">EDGE FADE STRATEGY</h3>
      <ul className="heroBullets">
        <li>
          <strong>Radial Mode:</strong> Best for auroras centered around a point or when viewed from below.
        </li>
        <li>
          <strong>Box Mode:</strong> Better for directional auroras or when you want independent control of X and Y
          fade distances.
        </li>
        <li>
          <strong>Softness:</strong> Use 0.4–0.6 for most cases. Higher values (0.7–1.0) work well for subtle,
          atmospheric aurora that blends with the environment.
        </li>
      </ul>

      <h3 className="heroSubTitleSm">PERFORMANCE OPTIMIZATION</h3>
      <ul className="heroBullets">
        <li>
          <strong>Aurora Area Extent:</strong> Larger extent increases fill rate cost. Keep extent appropriate to your
          scene scale—no need to make it larger than the camera's visible range.
        </li>
        <li>
          <strong>Film Grain:</strong> Minimal performance impact, safe to enable for all quality levels.
        </li>
        <li>
          <strong>Emissive Structure:</strong> Slightly more expensive. Consider disabling on lower-end platforms or for
          distant auroras.
        </li>
        <li>
          <strong>Structure Coloring:</strong> Very minimal cost, safe to use freely.
        </li>
      </ul>
    </section>
  );
}
