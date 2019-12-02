const exec = require('child_process').exec,
  comp = process.env.npm_config_comp || 'all',
  env = process.env.npm_config_env || '';

let compNumber = '1/1';

const commandLine = (compName) => {
  // const ngBuild = (env === 'prod')
  //   ? `ng build --project ${compName} --prod`
  //   : `ng build --project ${compName} -c ${env} --optimization=true --sourceMap=false --extractCss=true --namedChunks=false --aot=true --extractLicenses=true --vendorChunk=false --buildOptimizer=true`;

  const ngBuild = `ng build --project ${compName} --prod`
  
  return `${ngBuild} --extraWebpackConfig ../../webpack.externals.js --output-hashing none --single-bundle true && cat dist/${compName}/main.js > src/assets/web-components/${compName}/main.js`;
}

const execute = (commandLine, compName, compNumber) => {
  return new Promise((resolve, reject) => {
    console.log(`\x1b[37m%s\x1b[47m\x1b[30m%s\x1b[0m`, `BUILDING... `, ` ${compName} `, `\n`);
    exec(commandLine, { maxBuffer: 1024 * 500 }, (error, stdout) => {
      if (error) {
        reject(error);
        return;
      }
      resolve(stdout.trim());
    });
  }).then((response) => {
    console.log(response);
    console.log('\x1b[32m%s\x1b[0m', `SUCCESSFUL BUILD`, compName);
    console.log(`---------- ${compNumber} ---------- \n`);
  }, error => {
    console.log('\x1b[31m%s\x1b[0m', `${error} \n`);
  });
};


const buildWC = async (comp) => {
  await execute(commandLine(comp), comp, compNumber);
}

buildWC(comp);

