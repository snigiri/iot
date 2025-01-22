module.exports = {
    flowFile: 'flows.json',
    flowFilePretty: true,
    adminAuth: {
    	type: "credentials",
    	users: [{
    		username: "admin",
    		password: "$2y$05$zTebD8did4dpUlW2pKFkTe3eNFJzurRHj9WRbp4X0YNwOuNChCdxe",
        permissions: "*"
    		}]
    	},
    uiPort: process.env.PORT || 1880,
    diagnostics: {
        enabled: true,
        ui: true,
    },
    runtimeState: {
        enabled: false,
        ui: false,
    },
    logging: {
        console: {
            level: "info",
            metrics: false,
            audit: false
        }
    },
    exportGlobalContextKeys: false,
    externalModules: {
    },
    editorTheme: {
        palette: {
        },
        projects: {
            enabled: false,
            workflow: {
                mode: "manual"
            }
        },
        codeEditor: {
            lib: "monaco",
            options: {
            }
        },
        markdownEditor: {
            mermaid: {
                enabled: true
            }
        },
    },
    functionExternalModules: true,
    functionTimeout: 0,
    functionGlobalContext: {
    },
    debugMaxLength: 1000,
    mqttReconnectTime: 15000,
    serialReconnectTime: 15000,
}
