# Testing TelemetryEnvironment.setExperimentActive

Addon to demontrate and test usage of `TelemetryEnvironment.setExperimentActive` and friends


## TO use:

1.  **With an existing profile** Gregg will try to post every build of this to:  https://people.mozilla.com/~glind/all/telemetryenvironment-setexperimentactive-demo.xpi

OR

2. clone and run with jpm, in Nightly (for example)

```
git clone https://github.com/gregglind/quantum-preference-telemetry-annotation-pretender
cd quantum-preference-telemetry-annotation-pretender
npm install
./node_modules/.bin/jpm run -b Nightly
```
