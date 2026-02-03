import StepImage from "../components/StepImage.jsx";

import Img0 from "../assets/quickstart/image.png";
import Img1 from "../assets/quickstart/image-1.png";
import Img2 from "../assets/quickstart/image-2.png";
import Img3 from "../assets/quickstart/image-3.png";
import Img4 from "../assets/quickstart/image-4.png";
import Img5 from "../assets/quickstart/image-5.png";
import Img6 from "../assets/quickstart/image-6.png";

export default function QuickStartPage() {
  return (
    <section className="hero">
      <h1 className="heroTitle">Quick Start</h1>

      <p className="heroDesc">
        This guide walks you through setting up the Volumetric Aurora system in your project and tuning the aurora to
        match your level’s mood and lighting.
      </p>

      <hr className="heroDivider heroDividerTop" />

      {/* 0 */}
      <h2 className="heroSubTitleSm">0. Enable The Plugin</h2>
      <p className="heroText">First, enable the Volumetric Aurora plugin in the Unreal Editor.</p>

      <ol className="heroList">
        <li>Go to Edit &gt; Plugins.</li>
        <li>Search for “Volumetric Aurora” and enable it.</li>
        <li>If prompted, click Restart Now to apply the change.</li>
      </ol>

      <StepImage
        src={Img0}
        alt="Enable the Volumetric Aurora plugin in the Unreal Editor"
        caption="Enable the plugin (Edit → Plugins)."
        size="lg"
      />

      <hr className="heroDivider" />

      {/* 1 */}
      <h2 className="heroSubTitleSm">1. Place The Aurora Actor</h2>
      <p className="heroText">Once the plugin is loaded, place the aurora actor in your level.</p>

      <ol className="heroList">
        <li>Open the actor placement panel (Quickly add to project, or Window &gt; Place Actors).</li>
        <li>In the search box, type “Volumetric Aurora”.</li>
        <li>Drag the Volumetric Aurora actor into the viewport at the desired location.</li>
        <li>You should immediately see the aurora effect rendered in the viewport.</li>
      </ol>

      <StepImage
        src={Img1}
        alt="Locate the Volumetric Aurora actor in the Place Actors panel"
        caption="Find the actor from the placement panel."
        size="xsm"
      />

      <StepImage
        src={Img2}
        alt="Volumetric Aurora actor placed in the level and visible in the viewport"
        caption="After placing, the aurora should appear in the viewport."
        size="xmd"
      />

      <p className="heroCallout">
        <span className="heroCalloutLabel">Troubleshooting:</span> If the aurora is not visible or looks too faint after
        placing the actor, your level’s lighting setup may be affecting visibility. In the Details panel, increase the
        Intensity value first to make it clearly visible.
      </p>

      <hr className="heroDivider" />

      {/* 2 */}
      <h2 className="heroSubTitleSm">2. Select a Preset</h2>
      <p className="heroText">To quickly switch to different aurora shapes beyond the default, change the preset.</p>

      <ol className="heroList">
        <li>Select the Volumetric Aurora actor in the level.</li>
        <li>In the Details panel, find Aurora &gt; Aurora Preset.</li>
        <li>Choose a preset such as DefaultNoise, DefaultSpline, or DefaultFlow from the dropdown.</li>
      </ol>

      <StepImage
        src={Img3}
        alt="Aurora Preset dropdown in the Details panel"
        caption="Pick a preset from Aurora → Aurora Preset."
        size="xmd"
      />

      <hr className="heroDivider" />

      {/* 3 */}
      <h2 className="heroSubTitleSm">3. Tune the Parameters</h2>
      <p className="heroText">
        Based on the selected preset, adjust detailed parameters so the aurora blends perfectly with your map’s mood
        and lighting. Settings are divided into common parameters and type-specific parameters.
      </p>

      <h3 className="heroSubTitleSm">3-1. Common Settings</h3>
      <p className="heroText">These are the baseline mood and placement controls shared by all aurora types.</p>

      <p className="heroSectionLabel">Position and Shape</p>
      <ul className="heroBullets">
        <li>Altitude: Sets the starting altitude (km) of the aurora above the ground.</li>
        <li>Aurora Area Extent: Controls the horizontal spread across the sky.</li>
        <li>Aurora Height: Sets the vertical length (thickness) of the aurora band.</li>
        <li>Height Falloff: Controls how much the top edge fades.</li>
      </ul>

      <p className="heroSectionLabel">Visual Style</p>
      <ul className="heroBullets">
        <li>Intensity: The emissive strength. If the aurora is hard to see, increase this first.</li>
        <li>Colors (Top / Mid / Bottom): Sets three color layers for a richer gradient.</li>
        <li>Mid Color Height: Fine-tunes where the mid color is applied.</li>
        <li>Base Density and Scale: Defines baseline density and overall volume scale.</li>
      </ul>

      <p className="heroSectionLabel">Movement</p>
      <ul className="heroBullets">
        <li>Speed: Controls flow direction and speed using X and Y values.</li>
      </ul>

      <StepImage
        src={Img4}
        alt="Overview of Volumetric Aurora parameters in the Details panel"
        caption="Most tuning happens in the Details panel."
      />

      <h3 className="heroSubTitleSm">3-2. Type-Specific Settings</h3>
      <p className="heroText">
        Depending on the selected Aurora Preset, type-specific parameters become available in the lower part of the
        Details panel.
      </p>

      <p className="heroSectionLabel">Noise-only Parameters</p>
      <ul className="heroBullets">
        <li>Activity: Controls the internal turbulence.</li>
        <li>Smoothness: Adjusts how soft or sharp the noise pattern appears.</li>
        <li>Mask Settings: Use Mask Scale and Mask Speed to reduce visible repetition.</li>
      </ul>

      <p className="heroText">
        For settings specific to other aurora types, refer to each type’s dedicated documentation page.
      </p>

      <StepImage
        src={Img5}
        alt="Type-specific parameter section for the selected aurora preset"
        caption="Type-specific settings appear depending on the preset."
      />

      <hr className="heroDivider" />

      {/* 4 */}
      <h2 className="heroSubTitleSm">4. Save the Preset</h2>
      <p className="heroText">You can save your tuned aurora settings as a preset to reuse later or apply to other levels.</p>

      <ol className="heroList">
        <li>In the Details panel, find the Aurora section.</li>
        <li>Choose the appropriate option:</li>
      </ol>

      <ul className="heroBullets">
        <li>New Aurora Preset: Creates a new aurora preset.</li>
        <li>Save: Overwrites the currently selected preset with your changes.</li>
        <li>Save As: Saves the current settings as a new preset file.</li>
      </ul>

      <p className="heroText">After saving, the new preset will appear in the Aurora Preset dropdown list.</p>

      <StepImage 
        src={Img6} 
        alt="Save and Save As actions for aurora presets" 
        caption="Save your tuned settings as a preset." 
        size="xsm"
      />

      <p className="heroCallout">
        <span className="heroCalloutLabel">Warning:</span> Default presets included with the plugin are protected and
        cannot be overwritten with Save. If you modify a default preset, use Save As to store it under a new name.
      </p>
    </section>
  );
}