import "./DocsPage.css";
import "./FlowPage.css";
import StepImage from "../components/StepImage.jsx";
import DebugSpheres2D from "../components/DebugSpheres2D.jsx";

import ResetFlowButton from "../assets/flow/ResetFlowButton.png";
import ElementMap from "../assets/flow/ElementMap.png";
import EditElementsMapButton from "../assets/flow/EditElementMapButton.png";
import EditElementsMapUI from "../assets/flow/EditElementMapUI.png";
import BrushToolExample from "../assets/flow/BrushToolSection.png";
import CanvasPreview1 from "../assets/flow/CanvasPreviewExample1.png";
import CanvasPreview2 from "../assets/flow/CanvasPreviewExample2.png";
import SaveSaveAs from "../assets/flow/SaveSaveAs.png";
import AuroraCurtainImg from "../assets/flow/AuroraCurtain.jpg";
import ExtentHeightImg from "../assets/flow/ExtentHeight.png";
import CurtainExampleImg from "../assets/flow/CurtainExample.png";
import CurlExampleImg from "../assets/flow/CurlExample.png";
import ResultExampleImg from "../assets/flow/ResultExample.png";
import CaptureButtonImg from "../assets/flow/CaptureCurrentState.png";
import CheckpointTexture1Img from "../assets/flow/CheckpointTextureExample.png";
import CheckpointTexture2Img from "../assets/flow/CheckpointTextureExample2.png";

export default function FlowPage() {
  return (
    <section className="hero">
      <h1 className="heroTitle">Flow</h1>

      <p className="heroDesc">
        Flow Aurora is a type of aurora that calculates particle motion and renders its shape using a Potential Flow
        (simplified fluid dynamics) simulation. You do not need to study Potential Flow theory to use Flow Aurora.
      </p>

      <p className="heroText">
        If you would like to learn more about Potential Flow, refer to the resources below:
      </p>

      <ul className="heroBullets">
        <li>
          <a
            className="heroExternalLink"
            href="https://potentialflow.com/story"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Potential Flow — Theory (opens in a new tab)"
          >
            <span className="heroExternalLinkText">Potential Flow — Theory</span>
            <span className="heroExternalLinkIcon" aria-hidden="true">↗</span>
          </a>
        </li>
        <li>
          <a
            className="heroExternalLink"
            href="https://www.youtube.com/watch?v=4x2g676GgNQ"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Example Video (opens in a new tab)"
          >
            <span className="heroExternalLinkText">Example Video</span>
            <span className="heroExternalLinkIcon" aria-hidden="true">↗</span>
          </a>
        </li>
      </ul>

      <p className="heroText">
        Flow Aurora is controlled using two main components. This page explains how to use and control them effectively.
      </p>

      <section className="heroCards" aria-label="Flow guides">
        <article className="heroCard" role="button" tabIndex={0} aria-disabled="true">
          <div className="heroCardTitle">Aurora Elements Map</div>
          <div className="heroCardDesc">A texture that defines particle emission, absorption, and obstacle regions.</div>
        </article>

        <article className="heroCard" role="button" tabIndex={0} aria-disabled="true">
          <div className="heroCardTitle">Control Points</div>
          <div className="heroCardDesc">Points that exert physical influence on nearby particles.</div>
        </article>
      </section>

      <hr className="heroDivider heroDividerTop" />

      {/* BASIC SETTINGS */}
      <h2 className="heroSubTitle">Basic Settings</h2>
      <p className="heroText">
        Before working with the Aurora Elements Map and Control Points, this section explains the fundamental
        parameters and features of Flow Type auroras.
      </p>

      <h3 className="heroSubTitleSm">Reset Button</h3>
      <p className="heroText">Pressing this button restarts the aurora simulation from the beginning.</p>

      <StepImage
        src={ResetFlowButton}
        alt="Reset button in the Details panel"
        caption="Press Reset to restart the simulation"
        size="sm"
      />

      <h3 className="heroSubTitleSm">Basic Parameters</h3>

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
              <td>Base Flow</td>
              <td>Defines the primary flow direction of aurora particles.</td>
            </tr>
            <tr>
              <td>Display Control Points</td>
              <td>
                Enables debug visualization of Control Point positions. If disabled, individual Control Point display
                options will not be shown even if enabled.
              </td>
            </tr>
            <tr>
              <td>Display Attenuation Range</td>
              <td>
                Enables debug visualization of Control Point influence ranges. If disabled, individual range displays
                will not be shown even if enabled.
              </td>
            </tr>
            <tr>
              <td>Display Size</td>
              <td>
                Controls the size of debug visualization spheres for Control Points.
              </td>
            </tr>
            <tr>
              <td>Display ZPos</td>
              <td>
                Controls the Z-axis position of debug visualization for Control Points.
              </td>
            </tr>
            <tr>
              <td>Simulation Resolution</td>
              <td>
                Defines the resolution of the texture used for the fluid simulation. Higher values produce more
                particles and finer detail, but reduce performance.
              </td>
            </tr>
            <tr>
              <td>Reset Simulation on Element Change</td>
              <td>Determines whether the simulation automatically restarts when parameters are changed.</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h3 className="heroSubTitleSm">Emitter Noise Parameters</h3>
      <p className="heroText">
        These parameters add noise to particles emitted from the Aurora Elements Map, introducing natural randomness.
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
              <td>Emitter Noise Frequency</td>
              <td>Higher values produce denser noise patterns.</td>
            </tr>
            <tr>
              <td>Emitter Noise Speed</td>
              <td>Higher values cause the noise to change more rapidly.</td>
            </tr>
            <tr>
              <td>Emitter Noise Strength</td>
              <td>Higher values increase the influence of noise, resulting in stronger randomness.</td>
            </tr>
          </tbody>
        </table>
      </div>

      <hr className="heroDivider" />

      {/* AURORA ELEMENTS MAP */}
      <h2 className="heroSubTitle">Aurora Elements Map</h2>
      <p className="heroText">
        The Aurora Elements Map is a texture that uses the R, G, and B color channels to define the following:
      </p>

      <div className="heroTableWrap">
        <table className="heroTable">
          <thead>
            <tr>
              <th>Channel</th>
              <th>Function</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>R (Red)</td>
              <td>Particle emission regions (Emitter)</td>
            </tr>
            <tr>
              <td>G (Green)</td>
              <td>Particle absorption regions (Absorber)</td>
            </tr>
            <tr>
              <td>B (Blue)</td>
              <td>Particle blocking regions (Obstacle)</td>
            </tr>
          </tbody>
        </table>
      </div>

      <StepImage
        src={ElementMap}
        alt="Aurora Elements Map with R, G, B channels"
        caption="Elements Map with RGB channels"
        size="md"
      />

      <h3 className="heroSubTitleSm">Editing the Elements Map</h3>
      <p className="heroText">
        When the Aurora uses a Flow Type Preset, the Edit Elements Map UI becomes available. Click the Edit Elements Map
        button to open the Elements Map editing interface.
      </p>

      <StepImage
        src={EditElementsMapButton}
        alt="Edit Elements Map button in the Details panel"
        caption="Click Edit Elements Map button"
        size="sm"
      />
      <StepImage
        src={EditElementsMapUI}
        alt="Elements Map editing UI with preview, canvas, and brush settings"
        caption="Elements Map editing interface"
        size="lg"
      />

      <p className="heroText">The UI consists of three areas:</p>

      <div className="heroTableWrap">
        <table className="heroTable">
          <thead>
            <tr>
              <th>Area</th>
              <th>Description</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Left</td>
              <td>Preview area where you can observe how your edits affect the aurora in real time</td>
            </tr>
            <tr>
              <td>Center</td>
              <td>Canvas area where you edit the texture using brush painting</td>
            </tr>
            <tr>
              <td>Right</td>
              <td>Brush settings panel</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h3 className="heroSubTitleSm">Brush Settings</h3>

      <StepImage
        src={BrushToolExample}
        alt="Brush tool settings panel"
        caption="Brush settings panel"
        size="lg"
      />

      <div className="heroTableWrap">
        <table className="heroTable">
          <thead>
            <tr>
              <th>Option</th>
              <th>Description</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Red</td>
              <td>Sets the brush color to red (particle emission region).</td>
            </tr>
            <tr>
              <td>Green</td>
              <td>Sets the brush color to green (particle absorption region).</td>
            </tr>
            <tr>
              <td>Blue</td>
              <td>Sets the brush color to blue (particle obstacle region).</td>
            </tr>
            <tr>
              <td>Black</td>
              <td>Switches the brush to eraser mode, removing all colors.</td>
            </tr>
            <tr>
              <td>Clear</td>
              <td>Resets the entire canvas to black.</td>
            </tr>
            <tr>
              <td>Reset</td>
              <td>Restores the canvas to the current simulation state, undoing all unsaved edits.</td>
            </tr>
            <tr>
              <td>Brush Size</td>
              <td>Controls the size of the brush.</td>
            </tr>
            <tr>
              <td>Strength</td>
              <td>Controls color density. Higher density increases the effect strength of that region.</td>
            </tr>
            <tr>
              <td>Falloff Power</td>
              <td>Controls how quickly the color fades toward the brush edges.</td>
            </tr>
            <tr>
              <td>Inner Radius</td>
              <td>Defines the radius at which color falloff begins.</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h3 className="heroSubTitleSm">Finalizing and Saving</h3>
      <p className="heroText">
        As you paint on the canvas, the preview area updates in real time to show how the Elements Map affects the
        aurora.
      </p>

      <StepImage
        src={CanvasPreview1}
        alt="Canvas with brush painting and live preview"
        size="xsm"
      />

      <StepImage
        src={CanvasPreview2}
        alt="Canvas with brush painting and live preview"
        caption="Real-time preview while painting"
        size="xsm"
      />

      <p className="heroText">
        When finished, save your work using one of the following options:
      </p>

      <ul className="heroBullets">
        <li>
          <strong>Save:</strong> Overwrites the currently loaded Elements Map texture with your changes.
        </li>
        <li>
          <strong>Save As:</strong> Creates a new texture file with a custom name, preserving the original.
        </li>
      </ul>

      <StepImage
        src={SaveSaveAs}
        alt="Save and Save As buttons in the Elements Map editor"
        caption="Save and Save As buttons"
        size="sm"
      />

      <p className="heroText">
        Textures are saved to:
      </p>

      <pre className="heroCode">
        <code>VolumetricAurora/Textures/FlowElementMap</code>
      </pre>

      <p className="heroText">The Flow Aurora Preset will reference the saved texture automatically.</p>

      <hr className="heroDivider" />

      {/* CAPTURE CURRENT STATE */}
      <h2 className="heroSubTitle">Capture Current State</h2>

      <h3 className="heroSubTitleSm">Overview</h3>
      <p className="heroText">
        Flow Aurora <strong>starts its simulation from the initial state</strong> every time you launch the editor or
        run PIE (Play In Editor). This means particles begin from scratch and gradually evolve into the full aurora
        shape.
      </p>

      <p className="heroText">
        While this is natural behavior, it can be inconvenient if you want to <strong>display a fully-formed aurora
        immediately at game start</strong>.
      </p>

      <p className="heroText">
        To solve this, Flow Aurora provides a <strong>Capture feature</strong>. The Capture feature{" "}
        <strong>saves a snapshot of the simulation at a specific moment</strong>, allowing the aurora to start from
        that point in subsequent runs.
      </p>

      <h3 className="heroSubTitleSm">How to Use Capture</h3>

      <p className="heroSectionLabel">1. Run Simulation to Desired State</p>
      <p className="heroText">In the editor, run the aurora and wait until it reaches the shape you want to save.</p>

      <p className="heroSectionLabel">2. Click Capture Button</p>
      <p className="heroText">In the Details panel, click the <strong>Capture Current Simulation</strong> button.</p>

      <StepImage
        src={CaptureButtonImg}
        alt="Capture Current Simulation button in Details panel"
        caption="Location of the Capture button in Details panel"
        size="sm"
      />

      <p className="heroSectionLabel">3. Verify Save</p>
      <p className="heroText">
        If the capture succeeds, a texture will be created at the following location in the Details panel:
      </p>

      <pre className="heroCode">
        <code>Aurora → Preset Details → Flow Settings → Simulation Checkpoint Texture</code>
      </pre>

      <StepImage
        src={CheckpointTexture1Img}
        alt="Generated Checkpoint Texture entry in Details panel"
        caption="Generated Checkpoint Texture entry"
        size="sm"
      />

      <p className="heroSectionLabel">4. Inspect Captured Data</p>
      <p className="heroText">
        Double-click the Checkpoint Texture to open it in the texture editor. You'll see the particle position data
        from the capture moment stored as a texture.
      </p>

      <StepImage
        src={CheckpointTexture2Img}
        alt="Texture containing the captured simulation state"
        caption="Texture containing the captured simulation state"
        size="md"
      />

      <p className="heroCallout">
        <span className="heroCalloutLabel">💾 Save Location:</span> Checkpoint Textures are automatically saved to:
        <code className="heroInlineCode">\Plugins\VolumetricAurora\Content\Textures\FlowCheckpoints\</code>
      </p>

      <h3 className="heroSubTitleSm">Result</h3>
      <p className="heroText">
        Now when you restart the editor or run PIE, the aurora will <strong>appear immediately from the captured
        state</strong>.
      </p>

      <h3 className="heroSubTitleSm">Tips</h3>
      <ul className="heroBullets">
        <li>
          <strong>Included in Presets:</strong> Checkpoint Textures are saved with Aurora Presets, so the captured
          state is preserved when you save a preset.
        </li>
        <li>
          <strong>Reset to Initial:</strong> Clear the Checkpoint Texture entry to restart the simulation from the
          initial state.
        </li>
      </ul>

      <hr className="heroDivider" />

      {/* CONTROL POINTS */}
      <h2 className="heroSubTitle">Control Points</h2>
      <p className="heroText">Control Points are elements that exert physical forces on nearby particles.</p>

      <p className="heroText">
        You can add or remove Control Points from:
      </p>

      <pre className="heroCode">
        <code>Detail Panel → Aurora → Preset Details → Flow → Control Points</code>
      </pre>

      <h3 className="heroSubTitleSm">Common Properties</h3>
      <p className="heroText">All Control Points share the following properties:</p>

      <div className="heroTableWrap">
        <table className="heroTable">
          <thead>
            <tr>
              <th>Property</th>
              <th>Description</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Type</td>
              <td>Defines the Control Point type. Each type applies a different kind of physical force.</td>
            </tr>
            <tr>
              <td>Range</td>
              <td>
                Determines whether the Control Point affects the entire aurora (Global) or only a limited area (Local).
              </td>
            </tr>
            <tr>
              <td>Display Control Point</td>
              <td>Toggles debug visualization of the Control Point position.</td>
            </tr>
            <tr>
              <td>Display Attenuation Range</td>
              <td>
                Toggles debug visualization of the influence range. Only available when Range is set to Local.
              </td>
            </tr>
            <tr>
              <td>Position</td>
              <td>
                Defines the Control Point’s position. Positions are normalized to the aurora’s local space (0–1) for
                consistent placement regardless of aurora size.
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <h3 className="heroSubTitleSm">Attenuation Properties</h3>
      <p className="heroText">
        These properties are enabled when Range is set to Local. Each force type has its own prefixed set of these
        parameters.
      </p>

      <div className="heroTableWrap">
        <table className="heroTable">
          <thead>
            <tr>
              <th>Property</th>
              <th>Description</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>... Strength</td>
              <td>Defines the magnitude of the force.</td>
            </tr>
            <tr>
              <td>... Attenuation Start</td>
              <td>Distance at which the force begins to attenuate.</td>
            </tr>
            <tr>
              <td>... Attenuation End</td>
              <td>Distance at which the force fully fades out.</td>
            </tr>
            <tr>
              <td>... Attenuation Exponent</td>
              <td>
                Defines the attenuation curve between start and end. Higher values cause faster falloff.
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <h3 className="heroSubTitleSm">Force Application Behavior</h3>
      <ul className="heroBullets">
        <li>
          Curl, Warp Types: when Range is Global, the force is applied uniformly across the entire aurora regardless of
          distance.
        </li>
        <li>
          Other Types: even with Range set to Global, force strength decreases with distance. When Local, both
          distance-based falloff and attenuation settings are applied.
        </li>
      </ul>

      <hr className="heroDivider" />

      {/* CONTROL POINT TYPES */}
      <h2 className="heroSubTitle">Control Point Types</h2>
      <p className="heroText">
        Each Control Point type applies different forces to nearby particles. Some types apply multiple forces
        simultaneously.
      </p>

      <DebugSpheres2D className="heroDebugViz" />

      {/* SOURCE */}
      <h3 className="heroSubTitleSm">Source</h3>
      <p className="heroText">Pushes particles outward while generating new particles.</p>

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
              <td>Radial Strength</td>
              <td>Strength of the outward force.</td>
            </tr>
            <tr>
              <td>Emission Strength</td>
              <td>Strength of particle generation within the influence range.</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* SINK */}
      <h3 className="heroSubTitleSm">Sink</h3>
      <p className="heroText">Pulls particles inward while destroying them.</p>

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
              <td>Radial Strength</td>
              <td>Strength of the inward force.</td>
            </tr>
            <tr>
              <td>Fade Strength</td>
              <td>Strength of particle fading and removal within the influence range.</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* VORTEX */}
      <h3 className="heroSubTitleSm">Vortex</h3>
      <p className="heroText">Rotates particles around the Control Point while fading them out.</p>

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
              <td>Rotation Strength</td>
              <td>
                Rotation force strength. Positive values rotate counterclockwise, negative values rotate clockwise.
              </td>
            </tr>
            <tr>
              <td>Fade Strength</td>
              <td>Strength of particle fading and removal.</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* SPIRAL */}
      <h3 className="heroSubTitleSm">Spiral</h3>
      <p className="heroText">
        Pulls particles inward while rotating them, then fades them out. This is a combination of Sink and Vortex
        behavior.
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
              <td>Radial Strength</td>
              <td>Inward pulling force.</td>
            </tr>
            <tr>
              <td>Rotation Strength</td>
              <td>Rotational force.</td>
            </tr>
            <tr>
              <td>Fade Strength</td>
              <td>Strength of particle fading and removal.</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* DIPOLE */}
      <h3 className="heroSubTitleSm">Dipole</h3>
      <p className="heroText">
        Bends particle flow into a dipole-shaped field, similar to the magnetic field around the north and south poles
        of a magnet.
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
              <td>Dipole Direction</td>
              <td>Direction of the dipole axis.</td>
            </tr>
            <tr>
              <td>Dipole Strength</td>
              <td>Strength of the dipole effect.</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* CURL */}
      <h3 className="heroSubTitleSm">Curl</h3>
      <p className="heroText">
        Applies turbulence across the entire aurora, creating natural swirling motion.
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
              <td>Curl Strength</td>
              <td>Strength of turbulence.</td>
            </tr>
            <tr>
              <td>Curl Frequency</td>
              <td>Higher values create denser turbulence; lower values create broader patterns.</td>
            </tr>
            <tr>
              <td>Curl Animation Speed</td>
              <td>Speed at which turbulence evolves over time.</td>
            </tr>
            <tr>
              <td>Curl Octaves</td>
              <td>
                Number of Curl Noise layers stacked. Higher values produce more detailed turbulence.
              </td>
            </tr>
            <tr>
              <td>Show Advanced</td>
              <td>Displays advanced tuning options.</td>
            </tr>
          </tbody>
        </table>
      </div>

      <p className="heroText">Advanced options are enabled when Curl Octaves is 2 or higher.</p>

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
              <td>Curl Lacunarity</td>
              <td>
                Frequency multiplier per octave. Higher values create sharper turbulence.
              </td>
            </tr>
            <tr>
              <td>Curl Gain</td>
              <td>Controls influence scaling per octave.</td>
            </tr>
            <tr>
              <td>Curl Amplitude</td>
              <td>Controls the total amplitude of all Curl Noise layers.</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* WARP */}
      <h3 className="heroSubTitleSm">Warp</h3>
      <p className="heroText">
        Applies organic, flowing distortion patterns using Domain Warping. Similar to Curl, but capable of producing
        more complex and artistic motion.
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
              <td>Warp Flow Strength</td>
              <td>Final distortion strength.</td>
            </tr>
            <tr>
              <td>Warp Iterations</td>
              <td>Number of warping iterations. Higher values increase complexity.</td>
            </tr>
            <tr>
              <td>Warp Displacement</td>
              <td>Initial displacement magnitude.</td>
            </tr>
            <tr>
              <td>Warp Animation Speed</td>
              <td>Speed at which warp patterns evolve.</td>
            </tr>
            <tr>
              <td>Warp Octaves</td>
              <td>Number of FBM noise layers. Higher values increase detail.</td>
            </tr>
            <tr>
              <td>Show Advanced</td>
              <td>Displays advanced tuning options.</td>
            </tr>
          </tbody>
        </table>
      </div>

      <p className="heroText">Advanced options:</p>

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
              <td>Warp Falloff</td>
              <td>Rate at which distortion strength decreases per iteration.</td>
            </tr>
            <tr>
              <td>Warp Contrast</td>
              <td>Adjusts output pattern contrast. Higher values increase contrast.</td>
            </tr>
            <tr>
              <td>Warp Anim Amplitude</td>
              <td>Magnitude of animated displacement.</td>
            </tr>
            <tr>
              <td>Warp X Scale</td>
              <td>Noise scale along the X axis.</td>
            </tr>
            <tr>
              <td>Warp Y Scale</td>
              <td>Noise scale along the Y axis.</td>
            </tr>
            <tr>
              <td>Warp Noise Scale</td>
              <td>Sampling scale for the final noise.</td>
            </tr>
            <tr>
              <td>Warp X Offset</td>
              <td>X-axis noise sampling offset.</td>
            </tr>
            <tr>
              <td>Warp Y Offset</td>
              <td>Y-axis noise sampling offset.</td>
            </tr>
            <tr>
              <td>Warp Noise Offset</td>
              <td>Final noise sampling offset.</td>
            </tr>
            <tr>
              <td>Warp Lacunarity</td>
              <td>Frequency multiplier per FBM octave (enabled when Warp Octaves is 2 or higher).</td>
            </tr>
            <tr>
              <td>Warp Gain</td>
              <td>Amplitude scaling per FBM octave (enabled when Warp Octaves is 2 or higher).</td>
            </tr>
            <tr>
              <td>Warp Initial Amplitude</td>
              <td>Initial FBM amplitude (enabled when Warp Octaves is 2 or higher).</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* EMITTER */}
      <h3 className="heroSubTitleSm">Emitter</h3>
      <p className="heroText">Generates particles only, without applying any pushing force.</p>

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
              <td>Emission Strength</td>
              <td>Strength of particle generation within the influence range.</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* ATTENUATOR */}
      <h3 className="heroSubTitleSm">Attenuator</h3>
      <p className="heroText">Removes particles only, without applying any pulling force.</p>

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
              <td>Fade Strength</td>
              <td>Strength of particle fading and removal.</td>
            </tr>
          </tbody>
        </table>
      </div>

      <hr className="heroDivider" />

      {/* QUICK REFERENCE */}
      <h2 className="heroSubTitle">Quick Reference Table by Type</h2>

      <div className="heroTableWrap">
        <table className="heroTable">
          <thead>
            <tr>
              <th>Type</th>
              <th>Push / Pull</th>
              <th>Rotation</th>
              <th>Emit</th>
              <th>Fade</th>
              <th>Turbulence / Warp</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Source</td>
              <td>Push</td>
              <td>-</td>
              <td>✓</td>
              <td>-</td>
              <td>-</td>
            </tr>
            <tr>
              <td>Sink</td>
              <td>Pull</td>
              <td>-</td>
              <td>-</td>
              <td>✓</td>
              <td>-</td>
            </tr>
            <tr>
              <td>Vortex</td>
              <td>-</td>
              <td>✓</td>
              <td>-</td>
              <td>✓</td>
              <td>-</td>
            </tr>
            <tr>
              <td>Spiral</td>
              <td>Pull</td>
              <td>✓</td>
              <td>-</td>
              <td>✓</td>
              <td>-</td>
            </tr>
            <tr>
              <td>Dipole</td>
              <td>Dipole Flow</td>
              <td>-</td>
              <td>-</td>
              <td>-</td>
              <td>-</td>
            </tr>
            <tr>
              <td>Curl</td>
              <td>-</td>
              <td>-</td>
              <td>-</td>
              <td>-</td>
              <td>Turbulence</td>
            </tr>
            <tr>
              <td>Warp</td>
              <td>-</td>
              <td>-</td>
              <td>-</td>
              <td>-</td>
              <td>Distortion</td>
            </tr>
            <tr>
              <td>Emitter</td>
              <td>-</td>
              <td>-</td>
              <td>✓</td>
              <td>-</td>
              <td>-</td>
            </tr>
            <tr>
              <td>Attenuator</td>
              <td>-</td>
              <td>-</td>
              <td>-</td>
              <td>✓</td>
              <td>-</td>
            </tr>
          </tbody>
        </table>
      </div>

      <hr className="heroDivider" />

      {/* USAGE TIPS */}
      <h2 className="heroSubTitle">Usage Tips</h2>
      <p className="heroText">
        This section explains practical techniques for creating visually appealing aurora shapes using the features
        described above.
      </p>

      <h3 className="heroSubTitleSm">Shaping the Form</h3>
      <p className="heroText">
        One of the most commonly observed aurora shapes is the curtain form. This tutorial aims to create a
        curtain-style aurora.
      </p>

      <StepImage
        src={AuroraCurtainImg}
        alt="Real aurora curtain photograph"
        caption="Curtain-style aurora reference"
        size="lg"
      />

      <p className="heroText">
        The default value of AuroraAreaExtent is 50 (based on Noise Type presets), but Flow Type auroras often look
        better with a smaller volume. Adjust the value accordingly and set Simulation Resolution to 2048.
      </p>

      <StepImage
        src={ExtentHeightImg}
        alt="Aurora area extent and simulation resolution settings"
        caption="Adjust extent and set Simulation Resolution to 2048"
        size="sm"
      />

      <p className="heroText">
        Define high-density (0.7–0.9) red Emitter regions in the Elements Map. Use a small brush size (25–50) and apply
        the paint as dotted points.
      </p>

      <StepImage
        src={CurtainExampleImg}
        alt="Elements Map with red emitter dots creating curtain shape"
        caption="Paint high-density red emitter dots"
        size="lg"
      />

      <p className="heroText">
        Next, create two Curl Control Points:
      </p>
      <ul className="heroBullets">
        <li>Use the first Curl to create dense turbulence for curtain folds</li>
        <li>Use the second Curl to create broader turbulence for overall curtain motion</li>
      </ul>

      <StepImage
        src={CurlExampleImg}
        alt="Curl control points settings in Details panel"
        caption="Two Curl points: dense folds and broad motion"
        size="md"
      />
      <StepImage
        src={ResultExampleImg}
        alt="Final curtain-style aurora result"
        caption="Final curtain aurora result"
        size="lg"
      />

      <p className="heroText">
        Finally, experiment by applying additional Control Points such as Vortex, Source, and Sink to further enrich
        the aurora’s behavior.
      </p>
    </section>
  );
}