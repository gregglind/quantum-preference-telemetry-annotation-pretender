var {Cu, Cc} = require("chrome");

var tabs = require("sdk/tabs");

const CID = Cu.import('resource://gre/modules/ClientID.jsm');
const { TelemetryController } = Cu.import('resource://gre/modules/TelemetryController.jsm');
const { TelemetryEnvironment } = Cu.import('resource://gre/modules/TelemetryEnvironment.jsm');

function generateTelemetryIdIfNeeded() {
  let id = TelemetryController.clientID;
  /* istanbul ignore next */
  if (id === undefined) {
    return CID.ClientIDImpl._doLoadClientID();
  } else {
    return Promise.resolve(id);
  }
}

function active() {
  return JSON.stringify(TelemetryEnvironment.getActiveExperiments());
}
function doThings() {
  tabs.open('about:telemetry');
  var xnames = [
    'fake-quantum-experiment-1',
    'fake-quantum-experiment-2',
  ];

  xnames.forEach((id)=>{
    var branch = "control";
    TelemetryEnvironment.setExperimentActive(id, branch);
  })
  console.log(`SHOULD HAVE 2: active? ${active()}`);
  tabs.open(`data:application/json,${active()}`);

  xnames.slice(1).forEach((id)=>{
    TelemetryEnvironment.setExperimentInactive(id);
  })

  console.log(`SHOULD HAVE 1: active? ${active()}`);
  tabs.open(`data:application/json,${active()}`);
}


// main!
if ("setExperimentActive" in TelemetryEnvironment) {
  generateTelemetryIdIfNeeded().then(doThings);
} else {
  console.error("The Patch isn't landed in this version of firefox");
}

