/**
 * @file 验证 src/ 文件
 * @author xuexb <fe.xiaowu@gmail.com>
 */

/* eslint-disable fecs-no-require, no-console */

const fs = require('fs');
const path = require('path');
const glob = require('glob');
const validator = require('mip-validator')();

/**
 * 获取文件目录
 *
 * @param  {string} pattern 文件规则
 *
 * @return {Promise}
 */
function getFiles(pattern) {
    return new Promise((resolve, reject) => {
        glob(pattern, (err, files) => {
            if (err) {
                return reject(err);
            }

            resolve(files.map(uri => {
                return {
                    uri,
                    filepath: path.resolve(__dirname, uri)
                };
            }));
        });
    });
}

/**
 * 获取文件数据
 *
 * @param  {Array} files 文件数据
 *
 * @return {Promise}
 */
function getFileData(files) {
    return new Promise(resolve => {
        files.forEach(val => {
            val.html = fs.readFileSync(val.filepath).toString();
        });

        resolve(files);
    });
}

/**
 * 验证文件数据
 *
 * @param  {Array} files 文件数据
 *
 * @return {Promise}
 */
function validatorFiles(files) {
    return new Promise(resolve => {
        files.forEach(val => {
            val.errors = validator.validate(val.html);
        });

        resolve(files);
    });
}

getFiles('src/**/*.html')
    .then(getFileData)
    .then(validatorFiles)
    .then(data => {
        const output = data.filter(val => val.errors && val.errors.length > 0);

        output.forEach(val => {
            val.errors.forEach(error => {
                console.log(val.uri, ' => ', JSON.stringify(error, null, 2));
            });
        });

        if (!output.length) {
            console.log('非常棒, 没有错误!');
        }

    })
    .catch(err => {
        console.error(err);
    });

/* eslint-enable fecs-no-require, no-console */
