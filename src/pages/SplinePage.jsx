import "./DocsPage.css";

export default function SplinePage() {
  return (
    <section className="hero">
      <h1 className="heroTitle">Spline</h1>

      <p className="heroDesc">
        This page shows how to bake a DF texture from spline shapes and apply it to a Spline preset.
      </p>

      <hr className="heroDivider heroDividerTop" />

      {/* 1 */}
      <h3 className="heroSubTitleSm">1. Select the Baker Component</h3>
      <p className="heroText">Select the SplineDFTextureBakerComponent.</p>

      <hr className="heroDivider" />

      {/* 2 */}
      <h3 className="heroSubTitleSm">2. Focus on the Visualizer</h3>
      <p className="heroText">
        Click the &quot;Focus on the visualizer&quot; button.
      </p>
      <p className="heroText">
        Then, a visualizer will appear, showing the DF texture boundary.
      </p>
      <p className="heroText">
        I will explain the exact purpose of this visualizer in more detail later.
      </p>
      <p className="heroText">
        It is highly recommended to enable the &quot;Always show Debug Line&quot; flag and lock the Actor&apos;s
        Details Panel.
      </p>
      <p className="heroText">This allows for easier manipulation of the Spline Component.</p>

      <hr className="heroDivider" />

      {/* 3 */}
      <h3 className="heroSubTitleSm">3. Add Spline Components</h3>
      <p className="heroText">
        Add Spline Components by clicking the Add Spline Component button.
      </p>
      <p className="heroText">
        If you are unfamiliar with editing Spline Components in the viewport, we recommend referring to the
        documentation below.
      </p>
      <p className="heroText">
        <a
          className="heroExternalLink"
          href="https://dev.epicgames.com/documentation/en-us/unreal-engine/how-to-edit-a-spline-component-in-the-viewport?application_version=4.27#result"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Unreal Engine documentation: How to edit a Spline Component in the viewport (opens in a new tab)"
        >
          <span className="heroExternalLinkText">
            Unreal Engine Docs — How to edit a Spline Component in the viewport
          </span>
          <span className="heroExternalLinkIcon" aria-hidden="true">
            ↗
          </span>
        </a>
      </p>

      <hr className="heroDivider" />

      {/* 4 */}
      <h3 className="heroSubTitleSm">4. Position the Splines</h3>
      <p className="heroText">Position the splines as you like.</p>
      <p className="heroText">
        Movement along the Z-axis is restricted for the Spline Components, because we need 2D texture.
      </p>
      <p className="heroText">
        Lines outside the visualizer will not be baked into the texture.
      </p>

      <hr className="heroDivider" />

      {/* 5 */}
      <h3 className="heroSubTitleSm">5. Bake the DF Texture</h3>
      <p className="heroText">
        After arranging the splines, click the &quot;Bake DF Texture&quot; button.
      </p>

      <hr className="heroDivider" />

      {/* 6 */}
      <h3 className="heroSubTitleSm">6. Save the Baked Texture</h3>
      <p className="heroText">
        Enter a name for your new DF texture and click the &quot;Save&quot; button.
      </p>
      <p className="heroText">
        Tip: You can double-click an existing texture to overwrite it.
      </p>
      <p className="heroText">
        Disable the &quot;Always show Debug Line&quot; flag and unlock the Actor&apos;s Details Panel.
      </p>

      <hr className="heroDivider" />

      {/* 7 */}
      <h3 className="heroSubTitleSm">7. Assign to Your Spline Preset</h3>
      <p className="heroText">
        Select the VolumetricAurora actor and click the &quot;Aurora Preset&quot; combo box.
      </p>
      <p className="heroText">
        Select the Spline Preset into which you want to apply new DF texture.
      </p>
      <p className="heroText">(In this example, DefaultSpline preset is selected)</p>
      <p className="heroText">
        Select Noise Texture and the DF texture you just baked.
      </p>

      <hr className="heroDivider" />

      {/* 8 */}
      <h3 className="heroSubTitleSm">8. Final Check</h3>
      <p className="heroText">That&apos;s it!</p>
    </section>
  );
}