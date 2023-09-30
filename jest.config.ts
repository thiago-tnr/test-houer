import type { Config } from 'jest'
import path from 'path'

const config: Config = {
  rootDir: path.resolve(__dirname), // Diretório raiz com base na localização deste arquivo e "src" como subdiretório de origem
  clearMocks: true,
  coverageProvider: 'v8',
  transform: {
    '^.+\\.(t|j)sx?$': '@swc/jest'
  }
}

export default config
