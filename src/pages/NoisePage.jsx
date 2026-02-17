import "./DocsPage.css";
import StepImage from "../components/StepImage.jsx";

export default function NoisePage() {
  return (
    <section className="hero">
      <h1 className="heroTitle">Noise</h1>

      <p className="heroDesc">
        Noise Aurora creates classic aurora curtain effects using procedural noise patterns. This type simulates the
        characteristic ripples and folds of natural auroras through layered noise textures.
      </p>

      <hr className="heroDivider heroDividerTop" />

      {/* NOISE SETTINGS */}
      <h2 className="heroSubTitle">NOISE SETTINGS</h2>
      <p className="heroText">
        Noise Aurora uses two noise layers: shape noise for the primary curtain folds, and mask noise for creating
        gaps and organic variation.
      </p>

      <h3 className="heroSubTitleSm">SHAPE NOISE</h3>
      <p className="heroText">
        The shape noise creates the primary curtain folds and ripples that define the aurora's characteristic form.
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
              <td>Shape Frequency</td>
              <td>
                Frequency of the curtain folds. Higher values create tighter, more detailed ripples. Lower values create
                broader, smoother curtains. Range: 0.01–2.0.
              </td>
            </tr>
            <tr>
              <td>Scroll Velocity</td>
              <td>
                Speed and direction the aurora drifts across the sky (X and Y components). Small values create slow,
                natural movement. Range: -0.1 to 0.1.
              </td>
            </tr>
            <tr>
              <td>Smoothness</td>
              <td>
                Controls the softness of the curtain folds. Lower values (0.01–0.1) create sharp, thin edges. Higher
                values (0.5–1.0) create soft, billowy shapes. Range: 0.01–1.0.
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <h3 className="heroSubTitleSm">MASK NOISE</h3>
      <p className="heroText">
        The mask noise creates gaps, breaks, and variations in the aurora for a more organic, realistic appearance.
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
              <td>Mask Frequency</td>
              <td>
                Frequency of the mask pattern. Higher values create smaller, more frequent gaps. Lower values create
                larger, broader variations. Range: 0.01–2.0.
              </td>
            </tr>
            <tr>
              <td>Mask Scroll Velocity</td>
              <td>
                Speed and direction the mask pattern moves across the aurora. Independent from shape scroll velocity,
                allowing for complex evolving patterns. Range: -0.1 to 0.1.
              </td>
            </tr>
            <tr>
              <td>Mask Opacity</td>
              <td>
                Controls how strongly the mask affects the aurora. 1.0 allows complete masking (creating full gaps),
                0.0 disables masking entirely. Range: 0.0–1.0.
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <hr className="heroDivider" />

      {/* USAGE TIPS */}
      <h2 className="heroSubTitle">USAGE TIPS</h2>
      <p className="heroText">
        Practical techniques for creating effective Noise Aurora effects.
      </p>

      <h3 className="heroSubTitleSm">CREATING NATURAL CURTAIN MOTION</h3>
      <ul className="heroBullets">
        <li>
          <strong>Slow Movement:</strong> Keep scroll velocities small (default 0.001 works well) for natural,
          slow-drifting aurora. Larger values can make the movement too obvious.
        </li>
        <li>
          <strong>Offset Mask Movement:</strong> Set mask scroll velocity different from shape scroll velocity to
          create complex, constantly evolving patterns that never repeat.
        </li>
        <li>
          <strong>Moderate Smoothness:</strong> Values around 0.2–0.4 create realistic curtain edges that are neither
          too sharp nor too soft, matching natural aurora observations.
        </li>
      </ul>

      <h3 className="heroSubTitleSm">BALANCING SHAPE AND MASK</h3>
      <ul className="heroBullets">
        <li>
          <strong>High Density + High Mask Opacity:</strong> Creates well-defined curtain bands with clear gaps between
          them, good for dramatic, structured auroras.
        </li>
        <li>
          <strong>Low Density + Low Mask Opacity:</strong> Creates diffuse, ethereal aurora with gentle variations,
          good for subtle atmospheric effects.
        </li>
        <li>
          <strong>Mismatched Frequencies:</strong> Using different frequencies for shape and mask creates more
          interesting, less repetitive patterns than matching values.
        </li>
      </ul>

      <h3 className="heroSubTitleSm">FINE-TUNING THE CURTAIN</h3>
      <ul className="heroBullets">
        <li>
          <strong>Sharp Folds:</strong> Use low Smoothness (0.1–0.2) with moderate to high Shape Frequency (0.8–1.5)
          for crisp, well-defined curtain ripples.
        </li>
        <li>
          <strong>Soft Waves:</strong> Use high Smoothness (0.5–0.8) with lower Shape Frequency (0.3–0.7) for gentle,
          flowing aurora movement.
        </li>
        <li>
          <strong>Texture Selection:</strong> The Shape Texture itself matters. Textures with strong directional bias
          create more organized curtains, while isotropic noise creates more chaotic patterns.
        </li>
      </ul>
    </section>
  );
}
