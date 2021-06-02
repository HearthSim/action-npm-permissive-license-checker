const core = require("@actions/core");
const checker = require("license-checker");
const excludePrivatePackages = core.getInput("exclude-private-packages") === "true";
const productionOnly = core.getInput("production-only") === "true";

try {
	checker.init({
		start: process.cwd(),
		onlyAllow: "MIT;ISC;BSD;Unlicense;Apache-2.0;Python-2.0",
		excludePrivatePackages,
		production: productionOnly,
	}, function(err, packages) {
		if (err) {
			core.error("License check failed with error");
			core.setFailed(err);
			return;
		}
		core.info("All packages passed the license check!");
	});
}
catch(err) {
	core.setFailed(err.message);
}
