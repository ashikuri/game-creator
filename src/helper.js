const Enum = require('ok-enum')

module.exports = {
    SceneName: new Enum([
        "hello",
        "main",
    ]),
    EntityName: new Enum([
        "HelloTextEntity",
        "FriskEntity",
    ]),
}