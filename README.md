<p align="center">
  <a href="https://github.com/grzegorz914/homebridge-enphase-envoy"><img src="https://raw.githubusercontent.com/grzegorz914/homebridge-enphase-envoy/main/graphics/homebridge-enphase-envoy.png" width="540"></a>
</p>

<span align="center">

# Homebridge Enphase Envoy

[![verified-by-homebridge](https://badgen.net/badge/homebridge/verified/purple)](https://github.com/homebridge/homebridge/wiki/Verified-Plugins)
[![npm](https://badgen.net/npm/dt/homebridge-enphase-envoy?color=purple)](https://www.npmjs.com/package/homebridge-enphase-envoy)
[![npm](https://badgen.net/npm/v/homebridge-enphase-envoy?color=purple)](https://www.npmjs.com/package/homebridge-enphase-envoy)
[![npm](https://img.shields.io/npm/v/homebridge-enphase-envoy/beta.svg?style=flat-square)](https://www.npmjs.com/package/homebridge-enphase-envoy)
[![GitHub pull requests](https://img.shields.io/github/issues-pr/grzegorz914/homebridge-enphase-envoy.svg)](https://github.com/grzegorz914/homebridge-enphase-envoy/pulls)
[![GitHub issues](https://img.shields.io/github/issues/grzegorz914/homebridge-enphase-envoy.svg)](https://github.com/grzegorz914/homebridge-enphase-envoy/issues)

</span>

## Package Requirements

| Package | Installation | Role | Required |
| --- | --- | --- | --- |
| [Homebridge](https://github.com/homebridge/homebridge) | [Homebridge Wiki](https://github.com/homebridge/homebridge/wiki) | HomeKit Bridge | Required |
| [Config UI X](https://github.com/homebridge/homebridge-config-ui-x) | [Config UI X Wiki](https://github.com/homebridge/homebridge-config-ui-x/wiki) | Homebridge Web User Interface | Recommended |
| [Enphase Envoy](https://www.npmjs.com/package/homebridge-enphase-envoy) | [Plug-In Wiki](https://github.com/grzegorz914/homebridge-enphase-envoy/wiki) | Homebridge Plug-In | Required |

### About The Plugin

* Supports token authorization (6.0+)
  * Token can be generated automatically with Enlighten username (email address) and password or with external tools.
    * Tokens generated with Enlighten credentials data will be automatically refreshed if they expire.
    * Tokena generated with external tools cannot be refreshed automatically if they expire.
* Envoy `password` is detected automatically or can be added in the configuration if already changed by user.
* Installer `password` is generated automaticall (firmware <= v5.x).
* Envoy `device ID` is detected automatically.
* Supports [Power Production State](https://github.com/grzegorz914/homebridge-enphase-envoy/wiki#power-production-control) and `PLC Level` (requires firmware v7.0+ and installer credentials).
* For the best experience and to display all data, please use `Controller` or `EVE` app.
* Supporta external integrations, [RESTFul](https://github.com/grzegorz914/homebridge-enphase-envoy?tab=readme-ov-file#restful-integration), [MQTT](https://github.com/grzegorz914/homebridge-enphase-envoy?tab=readme-ov-file#mqtt-integration).
* Supported devices:
  * Firmware `v5.x.x`, `6.x.x`, `v7.x.x`, `v8.x.x`.
  * Envoy `Envoy S`, `IQ Envoy`, `IQ Load Controller`, `IQ Combiner`.
  * Q-Relays `Q-RELAY-1P` `Q-RELAY-3P`.
  * AC Batteries `AC Battery Storage`.
  * Meters `Production`, `Consumption`, `Storage`.
  * Microinverters `M215`, `M250`, `IQ6`, `IQ7`, `IQ8`.
  * Encharges `IQ Battery 3`, `IQ Battery 10`, `IQ Battery 5P`, `IQ Battery 3T`, `IQ Battery 10T`,
  * Ensemble/Enpower `IQ System Controller`, `IQ System Controller 2`.
  * WirelessKit `Communications Kit`.
  * Generator
* Exposed accessories in the native Home app:
  * Monitoring Sensors:
    * System `Data Refresh`
    * Production `Power State`, `Power Level`, `Energy State`, `Energy Level`.
    * Consumption `Power State`, `Power Level`, `Energy State`, `Energy Level`.
    * Enpower `Grid State`.
    * Encharge: `State`, `Backup Level`, `Dry Contacts`.
    * Encharge Profile: `Self Consumption`, `Savings`, `Economy`, `Full Backup`.
    * Grid Mode:
      * Enpower `Grid On`, `Grid Off`, `Multimode Grid On`, `Multimode Grid Off`, `Grid Tied`, `Grid Forming`.
      * Encharge `Grid On`, `Grid Off`, `Multimode Grid On`, `Multimode Grid Off`, `Grid Tied`, `Grid Forming`.
      * Solar `Grid On`, `Grid Off`, `Multimode Grid On`, `Multimode Grid Off`, `Grid Tied`, `Grid Forming`.
    * Generator `State`, `Mode`.  
  * Control Switches, Outlets, Lightbulbs:
    * System `Data Refresh`,
    * Production `Plc Level`, `Power Mode`, `Power State`, `Power Level`.
    * AC Battery `Energy State`, `Energy Level`.
    * Enpower `Grid State`, `Dry Contacts`.
    * Encharge `Energy State`, `Energy Level`.
    * Encharge Profile:
      * Self Consumption `Activate`, `Set Reserve`.
      * Savings `Activate`, `Set Reserve`.
      * Economy `Activate`, `Set Reserve`.
      * Full Backup `Activate`.
    * Generator `State`, `Mode`.

### Configuration

* Running this plugin as a [Child Bridge](https://github.com/homebridge/homebridge/wiki/Child-Bridges) is **highly recommended**. This prevents Homebridge from crashing if the plugin crashes.
* Installation and use of [Homebridge Config UI X](https://github.com/homebridge/homebridge-config-ui-x) to configure this plugin is **highly recommended**.
* The `sample-config.json` can be edited and used as an alternative for advanced users.

<p align="center">
  <a href="https://github.com/grzegorz914/homebridge-enphase-envoy"><img src="https://raw.githubusercontent.com/grzegorz914/homebridge-enphase-envoy/main/graphics/ustawienia.png" width="840"></a>
</p>

| Key | Description |
| --- | --- |
| `name` | The accessory `Name` to be displayed in `Homebridge/HomeKit`. |
| `host` | The Envoy Enphase Gateway `IP Address` or `Hostname`. If not supplied, defaults to `envoy.local`. For firmware v7.0+, please set the `IP Address`. |
| `envoyFirmware7xx` | Enables support for Envoy firmware v7.0+. |
| `envoyFirmware7xxTokenGenerationMode` | How you will obtain the token, `0 - Enlighten Credentials`, `1 - Your Own Generated Token`. |
| `envoyPasswd` | Envoy Enphase password (only if U already changed the default password) |
| `envoyToken` | Your own token only if you selected `1 - Your Own Generated Token`. |
| `envoyTokenInstaller` | Enable this if you are using the installer token. |
| `envoySerialNumber` | The Envoy Gateway serial number. |
| `enlightenUser` | Enlighten username. |
| `enlightenPasswd` | Enlighten password. |
| `supportPowerProductionState` | Enable support for checking [Power Production State](https://github.com/grzegorz914/homebridge-enphase-envoy/wiki#power-production-control) (requires firmware v7.0+ and installer credentials). |
| `powerProductionStateControl` | `Power Production Control Tile` for production state control (requires firmware v7.0+ and installer credentials). |
| `name` | Envoy accessory name for Home app. |
| `displayType` | Envoy accessory type for Home app, `0 - None/Disabled`, `1 - Switch`, `2 - Outlet`, `3 - Lightbulb`. |
| `namePrefix` | Accessory prefix for Envoy. |
| `supportPlcLevel` | Enables support for `PLC Level Check` for all devices (requires firmware v7.0+ and installer credentials). |
| `plcLevelControl` | `PLC Level Control Tile` for PLC level check (requires firmware v7.0+ and installer credentials). |
| `name` | PLC accessory name for Home app. |
| `displayType` | PLC accessory type to be displayed in Home app, `0 - None/Disabled`, `1 - Switch`, `2 - Outlet`, `3 - Lightbulb`. |
| `namePrefix` | Accessory prefix for the PLC. |
| `powerProductionSummary` | `Power Summary`, in `W`, of all microinverters. This will be used to calculate the display power level in the Home app `0-100 %`. |
| `powerProductionStateSensor` | `Power State Sensor` for production monitoring. |
| `name` | Production state sensor accessory name for Home app. |
| `displayType` | Production state sensor accessory type displayed in Home app, `0 - None/Disabled`, `1 - Motion Sensor`, `2 - Occupancy Sensor`, `3 - Contact Sensor`. |
| `namePrefix` | Accessory prefix for the the production state sensor. |
| `powerProductionLevelSensors` | `Power Level Sensor` for production monitoring. |
| `name` | Power level sensor accessory name for Home app. |
| `compareMode` | Power level comparison mode `<`, `<=`, `==`, `>`, `>=`. |
| `powerLevel` | Power level in `W` to compare to sensor that was triggered. |
| `displayType` | Power level sensor accessory type to be displayed in Home app, `0 - None/Disabled`, `1 - Motion Sensor`, `2 - Occupancy Sensor`, `3 - Contact Sensor`. |
| `namePrefix` | Accessory prefix for the power level sensor. |
| `energyProductionStateSensor` | `Energy State Sensor` for production monitoring. |
| `name` | Energy state sensor accessory name for Home app. |
| `displayType` | Energy state sensor accessory type to be displayed in Home app, `0 - None/Disabled`, `1 - Motion Sensor`, `2 - Occupancy Sensor`, `3 - Contact Sensor`. |
| `namePrefix` | Accessory prefix for the energy state sensor. |
| `energyProductionLevelSensors` | `Energy Level Sensor` for production monitoring. |
| `name` | Energy level sensor accessory name for Home app. |
| `compareMode` | Energy level comparison mode `<`, `<=`, `==`, `>`, `>=`. |
| `energyLevel` | Energy level in `Wh` to compare to sensor that was triggered. |
| `displayType` | Energy level sensor accessory type to be displayed in Home app, `0 - None/Disabled`, `1 - Motion Sensor`, `2 - Occupancy Sensor`, `3 - Contact Sensor`. |
| `namePrefix` | Accessory prefix for the energy level sensor. |
| `energyProductionLifetimeOffset` | `Energy Offset` in `Wh` for production (if needed) `+/-`. |
| `powerConsumptionTotalStateSensor` | `Power State Sensor` for `Total` consumption monitoring. |
| `name` | Power state sensor accessory name for Home app. |
| `displayType` | Power state sensor accessory type to be displayed in Home app, `0 - None/Disabled`, `1 - Motion Sensor`, `2 - Occupancy Sensor`, `3 - Contact Sensor`. |
| `namePrefix` | Accessory prefix for the power state sensor. |
| `powerConsumptionTotalLevelSensors` | `Power Level Sensor` for `Total` consumption monitoring. |
| `name` | Power consumption level sensor accessory name for Home app. |
| `compareMode` | Power consumptionlevel sensor comparison mode `<`, `<=`, `==`, `>`, `>=`. |
| `powerLevel` | Power consumption level in `W` to compare to power level sensor that was triggered. |
| `displayType` | Power consumption level sensor accessory type to be displayed in Home app, `0 - None/Disabled`, `1 - Motion Sensor`, `2 - Occupancy Sensor`, `3 - Contact Sensor`. |
| `namePrefix` | Accessory prefix for the power consumption level sensor. |
| `energyConsumptionTotalStateSensor` | `Energy State Sensor` for `Total` consumption monitoring. |
| `name` | Energy consumption total sensor name in Home app. |
| `displayType` | Energy consumption total sensor accessory type to be displayed in Home app, `0 - None/Disabled`, `1 - Motion Sensor`, `2 - Occupancy Sensor`, `3 - Contact Sensor`. |
| `namePrefix` | Accessory prefix for the energy consumption total sensor. |
| `energyConsumptionTotalLevelSensors` | `Energy Level Sensor` for `Total` consumption monitoring. |
| `name` | Energy level total sensor name for Home app. |
| `compareMode` | Energy level total sensor comparison mode `<`, `<=`, `==`, `>`, `>=`. |
| `energyLevel` | Energy level total in `Wh` to compare to sensor that was triggered. |
| `displayType` | Energy level total sensor accessory type to be displayed in Home app, `0 - None/Disabled`, `1 - Motion Sensor`, `2 - Occupancy Sensor`, `3 - Contact Sensor`. |
| `namePrefix` | Accessory prefix for the Energy level total sensor. |
| `energyConsumptionTotalLifetimeOffset` | `Energy Offset` in `Wh` for consumption `Total` (if needed) `+/-`. |
| `powerConsumptionNetStateSensor` | `Power State Sensor` for `Net` consumption monitoring. |
| `name` | Here set Your own sensor name. |
| `displayType` | Here select the sensor type to be displayed in HomeKit app, `0 - None/Disabled`, `1 - Motion Sensor`, `2 - Occupancy Sensor`, `3 - Contact Sensor`. |
| `namePrefix` | This enable the accessory name as a prefix for the sensor name. |
| `powerConsumptionNetLevelSensors` | This is `Power Level Sensor` for consumption `Net` monitoring. |
| `name` | Here set Your own sensor name. |
| `compareMode` | Here select the compare mode `<`, `<=`, `==`, `>`, `>=`. |
| `powerLevel` | Here set power level in `W` to compare at which the sensor fired. |
| `displayType` | Here select the sensor type to be displayed in HomeKit app, `0 - None/Disabled`, `1 - Motion Sensor`, `2 - Occupancy Sensor`, `3 - Contact Sensor`. |
| `namePrefix` | This enable the accessory name as a prefix for the sensor name. |
| `energyConsumptionNetStateSensor` | This is `Energy State Sensor` for consumption `Net` monitoring. |
| `name` | Here set Your own sensor name. |
| `displayType` | Here select the sensor type to be displayed in HomeKit app, `0 - None/Disabled`, `1 - Motion Sensor`, `2 - Occupancy Sensor`, `3 - Contact Sensor`. |
| `namePrefix` | This enable the accessory name as a prefix for the sensor name. |
| `energyConsumptionNetLevelSensors` | This is `Energy Level Sensor` for consumption `Net` monitoring. |
| `name` | Here set Your own sensor name. |
| `compareMode` | Here select the compare mode `<`, `<=`, `==`, `>`, `>=`. |
| `energyLevel` | Here set energy level in `Wh` to compare at which the sensor fired. |
| `displayType` | Here select the sensor type to be displayed in HomeKit app, `0 - None/Disabled`, `1 - Motion Sensor`, `2 - Occupancy Sensor`, `3 - Contact Sensor`. |
| `namePrefix` | This enable the accessory name as a prefix for the sensor name. |
| `energyConsumptionNetLifetimeOffset` | Here set the `Energy Offset` in `Wh` for consumption `Net` if nedded `+/-`. |
| `enepowerGridStateControl` | This is `Enpower Grid State Control` for `Grid ON/OFF` control from HomeKit. |
| `name` | Here set Your own tile name. |
| `displayType` | Here select the tile type to be displayed in HomeKit app, `0 - None/Disabled`, `1 - Switch`, `2 - Outlet`, `3 - Lightbulb`. |
| `namePrefix` | This enable the accessory name as a prefix for the tile name. |
| `enepowerGridStateSensor` | This is `Enpower Grid State Sensor` for `Grid` monitoring, if `Grid ON`, the contact fired. |
| `name` | Here set Your own sensor name. |
| `displayType` | Here select the sensor type to be displayed in HomeKit app, `0 - None/Disabled`, `1 - Motion Sensor`, `2 - Occupancy Sensor`, `3 - Contact Sensor`. |
| `namePrefix` | This enable the accessory name as a prefix for the sensor name. |
| `enepowerGridModeSensors` | That are `Enpower Grid Mode Sensors` for `Enpower Grid Mode` monitoring, if the `Mode` matches, the contact fired. |
| `name` | Here set Your own sensor name. |
| `gridMode` | Here select the grid mode `Grid On`, `Grid Off`, `Multimode Grid On`, `Multimode Grid Off`, `Grid Tied`, `Grid Forming`. |
| `displayType` | Here select the sensor type to be displayed in HomeKit app, `0 - None/Disabled`, `1 - Motion Sensor`, `2 - Occupancy Sensor`, `3 - Contact Sensor`. |
| `namePrefix` | This enable the accessory name as a prefix for the sensor name. |
| `enchargeStateSensor` | This is `Encharge State Sensor` for `State` monitoring, if `State ON`, the contact fired. |
| `name` | Here set Your own sensor name. |
| `displayType` | Here select the sensor type to be displayed in HomeKit app, `0 - None/Disabled`, `1 - Motion Sensor`, `2 - Occupancy Sensor`, `3 - Contact Sensor`. |
| `namePrefix` | This enable the accessory name as a prefix for the sensor name. |
| `enchargeProfileControl` | This is `Encharge Profile Control` for `Profile` control from HomeKit. |
| `name` | Here set Your own tile name. |
| `profile` | Here select the profile `Savings`, `Economy`, `Full Backup`, `Self Consumption`. |
| `displayType` | Here select the tile type to be displayed in HomeKit app, `0 - None/Disabled`, `1 - Lightbulb`. |
| `enchargeProfileSensors` | That are `Encharge Profile Sensors` for `Profile` monitoring, if the `Profile` matches, the contact fired. |
| `name` | Here set Your own sensor name. |
| `profile` | Here select the profile `Savings`, `Economy`, `Full Backup`, `Self Consumption`. |
| `displayType` | Here select the sensor type to be displayed in HomeKit app, `0 - None/Disabled`, `1 - Motion Sensor`, `2 - Occupancy Sensor`, `3 - Contact Sensor`. |
| `namePrefix` | This enable the accessory name as a prefix for the sensor name. |
| `enchargeGridModeSensors` | That are `Encharge Grid Mode Sensors` for `Encharge Grid Mod` monitoring, if the `Mode` matches, the contact fired. |
| `name` | Here set Your own sensor name. |
| `gridMode` | Here select the grid mode `Multimode Grid On`, `Multimode Grid Off`. |
| `displayType` | Here select the sensor type to be displayed in HomeKit app, `0 - None/Disabled`, `1 - Motion Sensor`, `2 - Occupancy Sensor`, `3 - Contact Sensor`. |
| `namePrefix` | This enable the accessory name as a prefix for the sensor name. |
| `enchargeBackupLevelSensors` | That are `Encharge Backup Level Sensors` for `Encharge Backup Level` monitoring, if the `Level` matches, the contact fired. |
| `name` | Here set Your own sensor name. |
| `compareMode` | Here select the compare mode `<`, `<=`, `==`, `>`, `>=`. |
| `backupLevel` | Here set backup level in `%` to compare at which the sensor fired. |
| `displayType` | Here select the sensor type to be displayed in HomeKit app, `0 - None/Disabled`, `1 - Motion Sensor`, `2 - Occupancy Sensor`, `3 - Contact Sensor`. |
| `namePrefix` | This enable the accessory name as a prefix for the sensor name. |
| `solarGridModeSensors` | That are `Solar Grid Mode Sensors` for `Solar Grid Mode` monitoring, if the `Mode` matches, the contact fired. |
| `name` | Here set Your own sensor name. |
| `gridMode` | Here select the grid mode `Grid On`, `Grid Off`, `Multimode Grid On`, `Multimode Grid Off`, `Grid Tied`, `Grid Forming`. |
| `displayType` | Here select the sensor type to be displayed in HomeKit app, `0 - None/Disabled`, `1 - Motion Sensor`, `2 - Occupancy Sensor`, `3 - Contact Sensor`. |
| `namePrefix` | This enable the accessory name as a prefix for the sensor name. |
| `enpowerDryContactsControl` | This enable `Dry Contacts` control and expose `Switches` in HomeKit. |
| `enpowerDryContactsSensors` | This enable `Dry Contacts` monitoring and expose `Sensors` in HomeKit. |
| `generatorStateControl` | This is `Generator State Control` for `Generator OFF/ON` control from HomeKit. |
| `name` | Here set Your own tile name. |
| `displayType` | Here select the tile type to be displayed in HomeKit app, `0 - None/Disabled`, `1 - Switch`, `2 - Outlet`, `3 - Lightbulb`. |
| `namePrefix` | This enable the accessory name as a prefix for the tile name. |
| `generatorStateSensor` | This is `Generator State Sensor` for `State` monitoring, if `State not Off`, the contact fired. |
| `name` | Here set Your own sensor name. |
| `displayType` | Here select the sensor type to be displayed in HomeKit app, `0 - None/Disabled`, `1 - Motion Sensor`, `2 - Occupancy Sensor`, `3 - Contact Sensor`. |
| `namePrefix` | This enable the accessory name as a prefix for the sensor name. |
| `generatorModeContol` | That are `Generator Mode Control`, for `Generator OFF/ON/AUTO` control from HomeKit. |
| `name` | Here set Your own tile name. |
| `mode` | Here select the grid mode `Off`, `On`, `Auto`. |
| `displayType` | Here select the sensor type to be displayed in HomeKit app, `0 - None/Disabled`, `1 - Switch`, `2 - Outlet`, `3 - Lightbulb`. |
| `generatorModeSensors` | That are `Generator Mode Sensors` for `Generator Mode` monitoring, if the `Mode` matches, the contact fired. |
| `name` | Here set Your own sensor name. |
| `mode` | Here select the grid mode `Off`, `On`, `Auto`. |
| `displayType` | Here select the sensor type to be displayed in HomeKit app, `0 - None/Disabled`, `1 - Motion Sensor`, `2 - Occupancy Sensor`, `3 - Contact Sensor`. |
| `namePrefix` | This enable the accessory name as a prefix for the sensor name. |
| `dataRefreshControl` | This is `Data Refresh Control` for `Data Refresh` control from HomeKit. |
| `name` | Here set Your own tile name. |
| `displayType` | Here select the tile type to be displayed in HomeKit app, `0 - None/Disabled`, `1 - Switch`, `2 - Outlet`, `3 - Lightbulb`. |
| `namePrefix` | This enable the accessory name as a prefix for the tile name. |
| `dataRefreshSensor` | This is `Data Refresh Sensor` for `Data Refresh` monitoring, if working, the contact fired. |
| `name` | Here set Your own sensor name. |
| `displayType` | Here select the sensor type to be displayed in HomeKit app, `0 - None/Disabled`, `1 - Motion Sensor`, `2 - Occupancy Sensor`, `3 - Contact Sensor`. |
| `namePrefix` | This enable the accessory name as a prefix for the sensor name. |
| `metersDataRefreshTime` | Here set `Meters Data` rfresh time in (sec). |
| `productionDataRefreshTime` | Here set `Production Data` rfresh time in (sec). |
| `liveDataRefreshTime` | Here set `Live Data` rfresh time in (sec). |
| `ensembleDataRefreshTime` | Here set `Ensemble Data` rfresh time in (sec). |
| `disableLogDeviceInfo` | If enabled, add ability to disable log device info by every connections device to the network. |
| `disableLogInfo` | If enabled, disable log info, all values and state will not be displayed in Homebridge log console. |
| `disableLogSuccess` | If enabled, disable logging device success. |
| `disableLogWarn` | If enabled, disable logging device warnings. |
| `disableLogError` | If enabled, disable logging device error. |
| `enableDebugMode` | If enabled, deep log will be present in homebridge console. |
| `restFul` | This is RSTful server. |
| `enable` | This enabled, RESTful server, start automatically and respond to any path request. |
| `port` | Here set the listening `Port` for RESTful server. |
| `debug` | This enable deep log and present in homebridge console for RESTFul server. |
| `mqtt` | This is MQTT Broker. |
| `enable` | This enable MQTT Broker, start automatically and publish all awailable data. |
| `host` | Here set the `IP Address` or `Hostname` for MQTT Broker. |
| `port` | Here set the `Port` for MQTT Broker, default 1883. |
| `clientId` | Here optional set the `Client Id` of MQTT Broker. |
| `prefix` | Here set the `Prefix` for `Topic` or leave empty. |
| `auth` | This enable MQTT Broker authorization credentials. |
| `user` | Here set the MQTT Broker user. |
| `passwd` | Here set the MQTT Broker password. |
| `debug` | This enable deep log and present in homebridge console for MQTT. |

### RESTFul Integration

* POST data as a JSON Object `{DataSampling: true}`, content type must be `application/json`

| Method | URL | Path | Response | Type |
| --- | --- | --- | --- | --- |
| GET | `http//ip:port` | `token`, `info`, `home`, `inventory`, `meters`, `metersreading`, `ensembleinventory`, `ensemblestatus`, `enchargeettings`, `tariff`, `drycontacts`, `drycontactssettinge`, `generator`, `generatorsettings`, `gridprofile`, `livedata`, `production`, `productionct`, `microinverters`, `powermode`, `plclevel`, `datasampling`. | `{wNow: 2353}` | JSON object. |

| Method | URL | Key | Value | Type | Description |
| --- | --- | --- | --- | --- | --- |
| POST | `http//ip:port` | `DataSampling` | `true`, `false` | boolean | Data sampling Start/Stop. |
|      | `http//ip:port` | `PowerProductionState` | `true`, `false` | boolean | Power production state On/Off. |
|      | `http//ip:port` | `PlcLevel` | `true` | boolean | Check Plc Level On. |
|      | `http//ip:port` | `EnchargeProfile` | `self-consumption`, `savings`, `economy`, `fullbackup` | string | Set encharge profile. |
|      | `http//ip:port` | `EnpowerGridState` | `true`, `false` | boolean | Grid state On/Off. |
|      | `http//ip:port` | `GeneratorMode` | `off`, `on`, `auto` | string | Generator mode Off/On/Auto. |

### MQTT Integration

* Subscribe data as a JSON Object `{EnchargeProfile: "savings"}`

| Method | Topic | Message | Type |
| --- | --- | --- | --- |
| Publish | `Token`, `Info`, `Home`, `Inventory`, `Meters`, `Meters Reading`, `Ensemble Inventory`, `Ensemble Status`, `Encharge Settings`, `Tariff`, `Dry Contacts`, `Dry Contacts Settings`, `Generator`, `Generator Settings`, `Grid Profile`, `Live Data`, `Production`, `Production CT`, `Microinverters`, `Power Mode`, `PCU Comm Level`, `Data Sampling` | `{wNow: 2353}` | JSON object. |

| Method | Topic | Key | Value | Type | Description |
| --- | --- | --- | --- | --- | --- |
| Subscribe | `Set` | `DataSampling` | `true`, `false` | boolean | Data sampling Start/Stop. |
|           | `Set` | `PowerProductionState` | `true`, `false` | boolean | Power production state On/Off. |
|           | `Set` | `PlcLevel` | `true` | boolean | Check Plc Level On. |
|           | `Set` | `EnchargeProfile` | `self-consumption`, `savings`, `economy`, `fullbackup` | string | Set encharge profile. |
|           | `Set` | `EnpowerGridState` | `true`, `false` | boolean | Grid state On/Off. |
|           | `Set` | `GeneratorMode` | `off`, `on`, `auto` | string | Generator mode Off/On/Auto. |
