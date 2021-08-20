import 'element-plus/dist/index.css'

import ConfigurationLayout from './src/configuration-layout.vue'

ConfigurationLayout.install = (app) => {
  app.component(ConfigurationLayout.name, ConfigurationLayout)
}

export default ConfigurationLayout