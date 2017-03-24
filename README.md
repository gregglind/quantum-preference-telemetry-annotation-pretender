# Testing TelemetryEnvironment.setExperimentActive

Addon to demontrate and test usage of `TelemetryEnvironment.setExperimentActive` and friends


## TO use:

###  **With an existing profile**

Gregg will try to post every build of this to:  https://people.mozilla.com/~glind/all/setexperimentactive_testing-1.0.0-an+fx.xpi

### **from SOURCE**

clone and run with jpm, in Nightly (for example)

```
git clone https://github.com/gregglind/quantum-preference-telemetry-annotation-pretender
cd quantum-preference-telemetry-annotation-pretender
npm install
./node_modules/.bin/jpm run -b Nightly
```

## What SHOULD HAPPEN

1.  (During EVERY STARTUP)
2.  Open `about:telemetry`
3.  Enroll client in 2 experiments.  Open a page showing the list
4.  Drop out of 1 experiment.  Open a page showing the list
5.  No additional actions or UI
