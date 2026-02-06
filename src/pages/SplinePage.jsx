import StepImage from "../components/StepImage.jsx";

import img3 from "../assets/spline/3.png";
import img6 from "../assets/spline/6.png";
import img7 from "../assets/spline/7.png";
import img15 from "../assets/spline/15.png";

import BakerComponent from "../assets/spline/BakerComponent.png";
import FocusVisualizer from "../assets/spline/FocusVisualizer.png";
import LockCurrentSelection from "../assets/spline/LockCurrentSelection.png";
import ShowDebugLineCheck from "../assets/spline/ShowDebugLineCheck.png";
import BakeDFTexture from "../assets/spline/BakeDFTexture.png";
import SaveTextureAs from "../assets/spline/SaveTextureAs.png";
import ShowDebugLineOff from "../assets/spline/ShowDebugLineOff.png";
import UnlockCurrentSelection from "../assets/spline/UnlockCurrentSelection.png";
import NewSpline from "../assets/spline/NewSpline.png"
import ApplyNewTexture from "../assets/spline/ApplyNewTexture.png"

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
      {/* <StepImage src={img1} alt="Select the SplineDFTextureBakerComponent" size="sm" /> */}
      <StepImage src={BakerComponent} alt="Select the SplineDFTextureBakerComponent" size="sm" />

      <hr className="heroDivider" />

      {/* 2 */}
      <h3 className="heroSubTitleSm">2. Focus on the Visualizer</h3>
      <p className="heroText">Click the &quot;Focus on the visualizer&quot; button.</p>
      {/* <StepImage src={img2} alt='Click "Focus on the visualizer" button' size="sm" /> */}
      <StepImage src={FocusVisualizer} alt='Click "Focus on the visualizer" button' size="sm" />

      <p className="heroText">Then, a visualizer will appear, showing the DF texture boundary.</p>
      <StepImage src={img3} alt="Visualizer appears and shows DF texture boundary" size="lg"/>

      <p className="heroText">I will explain the exact purpose of this visualizer in more detail later.</p>

      <p className="heroText">
        It is highly recommended to enable the &quot;Always show Debug Line&quot; flag and lock the Actor&apos;s
        Details Panel.
      </p>
      {/* <StepImage src={img4} alt='Enable "Always show Debug Line" flag' size="sm" /> */}
      <StepImage src={ShowDebugLineCheck} alt='Enable "Always show Debug Line" flag' size="sm" />
      {/* <StepImage src={img5} alt="Lock the Actor Details Panel" size="sm" /> */}
      <StepImage src={LockCurrentSelection} alt="Lock the Actor Details Panel" size="sm" />

      <p className="heroText">This allows for easier manipulation of the Spline Component.</p>

      <hr className="heroDivider" />

      {/* 3 */}
      <h3 className="heroSubTitleSm">3. Add Spline Components</h3>
      <p className="heroText">Add Spline Components by clicking the Add Spline Component button.</p>
      <StepImage src={img6} alt="Add Spline Component button" size="lg" />

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
      <p className="heroText">Movement along the Z-axis is restricted for the Spline Components, because we need 2D texture.</p>
      <p className="heroText">Lines outside the visualizer will not be baked into the texture.</p>
      <StepImage src={img7} alt="Position splines within the visualizer boundary" size="lg" />

      <hr className="heroDivider" />

      {/* 5 */}
      <h3 className="heroSubTitleSm">5. Bake the DF Texture</h3>
      <p className="heroText">After arranging the splines, click the &quot;Bake DF Texture&quot; button.</p>
      {/* <StepImage src={img8} alt='Click "Bake DF Texture" button' size="lg" /> */}
      <StepImage src={BakeDFTexture} alt='Click "Bake DF Texture" button' size="sm" />

      <hr className="heroDivider" />

      {/* 6 */}
      <h3 className="heroSubTitleSm">6. Save the Baked Texture</h3>
      <p className="heroText">Enter a name for your new DF texture and click the &quot;Save&quot; button.</p>
      {/* <StepImage src={img9} alt='Enter a name and click "Save"' size="sm" /> */}
      <StepImage src={SaveTextureAs} alt='Enter a name and click "Save"' size="sm" />
      
      <p className="heroText">Tip: You can double-click an existing texture to overwrite it.</p>

      <p className="heroText">
        Disable the &quot;Always show Debug Line&quot; flag and unlock the Actor&apos;s Details Panel.
      </p>
      {/* <StepImage src={img10} alt='Disable "Always show Debug Line" and unlock Details Panel' size="sm"/> */}
      <StepImage src={UnlockCurrentSelection} alt='Disable "Always show Debug Line" and unlock Details Panel' size="sm"/>
      <StepImage src={ShowDebugLineOff} alt='Disable "Always show Debug Line" and unlock Details Panel' size="sm"/>

      <hr className="heroDivider" />

      {/* 7 */}
      <h3 className="heroSubTitleSm">7. Assign to Your Spline Preset</h3>
      <p className="heroText">Select the VolumetricAurora actor and click the &quot;Aurora Preset&quot; combo box.</p>
      {/*<StepImage src={img11} alt='Select VolumetricAurora actor and open "Aurora Preset" combo box' size="sm"/>*/}

      <p className="heroText">
        Select the Spline Preset into which you want to apply new DF texture.
        <br />
        <span className="heroNote">(In this example, DefaultSpline preset is selected)</span>
      </p>
      {/* <StepImage src={img12} alt="Select a Spline Preset (DefaultSpline example)" size="sm" /> */}
      <StepImage src={NewSpline} alt="Select a Spline Preset (DefaultSpline example)" size="sm" />

      <p className="heroText">Select Noise Texture and the DF texture you just baked.</p>
      {/* <StepImage src={img13} alt="Select Noise Texture" size="sm" /> */}
      {/* <StepImage src={img14} alt="Select the baked DF texture" size="sm" /> */}
      <StepImage src={ApplyNewTexture} alt="Select the baked DF texture" size="sm" />

      <hr className="heroDivider" />

      {/* 8 */}
      <h3 className="heroSubTitleSm">8. Final Check</h3>
      <p className="heroText">That&apos;s it!</p>
      <StepImage src={img15} alt="Final result" />
    </section>
  );
}