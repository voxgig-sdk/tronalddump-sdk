"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const node_path_1 = __importDefault(require("node:path"));
const Fs = __importStar(require("node:fs"));
const node_test_1 = require("node:test");
const node_assert_1 = __importDefault(require("node:assert"));
const live_runner_1 = require("../../live-runner");
const live_entity_1 = require("../../live-entity");
const __1 = require("../../..");
const utility_1 = require("../../utility");
// AFTER the imports on purpose: TypeScript hoists `import` above any
// statement in the emitted CommonJS, so a loader placed above them would
// run only after every imported module had already been evaluated - and
// anything reading process.env at module scope would miss these values.
(0, utility_1.loadEnvLocal)(__dirname + '/../../../.env.local');
(0, node_test_1.describe)('SourceEntity', async () => {
    // Per-test live pacing. Delay is read from sdk-test-control.json's
    // `test.live.delayMs`; only sleeps when TRONALDDUMP_TEST_LIVE=TRUE.
    (0, node_test_1.afterEach)((0, utility_1.liveDelay)('TRONALDDUMP_TEST_LIVE'));
    (0, node_test_1.test)('instance', async () => {
        const testsdk = __1.TronalddumpSDK.test();
        const ent = testsdk.Source();
        (0, node_assert_1.default)(null != ent);
    });
    (0, node_test_1.test)('basic', async (t) => {
        const live = 'TRUE' === process.env.TRONALDDUMP_TEST_LIVE;
        for (const op of ['load']) {
            if (!live && (0, utility_1.maybeSkipControl)(t, 'entityOp', 'source.' + op, live))
                return;
        }
        const setup = basicSetup();
        if (setup.live) {
            return (0, live_entity_1.runLiveEntity)(setup, { "active": true, "alias": { "field": {} }, "fields": [{ "active": true, "name": "count", "req": false, "short": "Total number of sources", "type": "`$INTEGER`", "index$": 0 }, { "active": true, "name": "embedded", "req": false, "type": "`$OBJECT`", "index$": 1 }, { "active": true, "name": "id", "req": false, "type": "`$STRING`", "index$": 2 }, { "active": true, "name": "links", "req": false, "short": "HATEOAS links", "type": "`$OBJECT`", "index$": 3 }, { "active": true, "name": "total", "req": false, "short": "Total number of sources available", "type": "`$INTEGER`", "index$": 4 }], "id": { "field": "id", "name": "id" }, "name": "source", "op": { "load": { "input": "data", "name": "load", "points": [{ "active": true, "args": { "params": [{ "active": true, "kind": "param", "name": "id", "orig": "source_id", "reqd": true, "type": "`$STRING`", "index$": 0 }] }, "contract": { "id": "GET /source/{source_id}", "json": "{\"operationId\":\"getSourceById\",\"parameters\":[{\"description\":\"The unique identifier of the source\",\"in\":\"path\",\"name\":\"source_id\",\"required\":true,\"schema\":{\"type\":\"string\"}}],\"protocol\":\"http\",\"responses\":{\"200\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"_links\":{\"description\":\"HATEOAS links related to the source\",\"type\":\"object\"},\"created_at\":{\"description\":\"The date and time when the source was created\",\"format\":\"date-time\",\"type\":\"string\"},\"filename\":{\"description\":\"Filename associated with the source\",\"type\":\"string\"},\"source_id\":{\"description\":\"Unique identifier for the source\",\"type\":\"string\"},\"updated_at\":{\"description\":\"The date and time when the source was last updated\",\"format\":\"date-time\",\"type\":\"string\"},\"url\":{\"description\":\"URL of the source\",\"format\":\"uri\",\"type\":\"string\"}},\"type\":\"object\"}}},\"description\":\"Successful response\"},\"404\":{\"description\":\"Source not found\"},\"500\":{\"description\":\"Internal server error\"}},\"securitySource\":\"unspecified\"}", "source": "openapi3", "version": 1 }, "kind": "http", "method": "GET", "orig": "/source/{source_id}", "rename": { "param": { "source_id": "id" } }, "segments": [{ "lit": "source" }, { "var": "id" }], "select": { "exist": ["id"] }, "transform": { "req": "`reqdata`", "res": "`body._links`" }, "index$": 0 }, { "active": true, "args": {}, "contract": { "id": "GET /source", "json": "{\"operationId\":\"getAllSources\",\"parameters\":[],\"protocol\":\"http\",\"responses\":{\"200\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"_embedded\":{\"properties\":{\"sources\":{\"items\":{\"properties\":{\"_links\":{\"description\":\"HATEOAS links related to the source\",\"type\":\"object\"},\"created_at\":{\"description\":\"The date and time when the source was created\",\"format\":\"date-time\",\"type\":\"string\"},\"filename\":{\"description\":\"Filename associated with the source\",\"type\":\"string\"},\"source_id\":{\"description\":\"Unique identifier for the source\",\"type\":\"string\"},\"updated_at\":{\"description\":\"The date and time when the source was last updated\",\"format\":\"date-time\",\"type\":\"string\"},\"url\":{\"description\":\"URL of the source\",\"format\":\"uri\",\"type\":\"string\"}},\"type\":\"object\"},\"type\":\"array\"}},\"type\":\"object\"},\"_links\":{\"description\":\"HATEOAS links\",\"type\":\"object\"},\"count\":{\"description\":\"Total number of sources\",\"type\":\"integer\"},\"total\":{\"description\":\"Total number of sources available\",\"type\":\"integer\"}},\"type\":\"object\"}}},\"description\":\"Successful response\"},\"500\":{\"description\":\"Internal server error\"}},\"securitySource\":\"unspecified\"}", "source": "openapi3", "version": 1 }, "kind": "http", "method": "GET", "orig": "/source", "segments": [{ "lit": "source" }], "select": {}, "transform": { "req": "`reqdata`", "res": "`body`" }, "index$": 1 }], "key$": "load" } }, "relations": { "ancestors": [] }, "key$": "source", "name__orig": "source", "Name": "Source", "name_": "source", "name-": "source", "NAME": "SOURCE", "index$": 2 }, { "active": true, "entity": "source", "key$": "BasicSourceFlow", "kind": "basic", "name": "BasicSourceFlow", "param": {}, "step": [{ "active": true, "data": {}, "input": { "ref": "source_ref01", "srcdatavar": "source_ref01_data", "suffix": "_dt0" }, "match": {}, "op": "load", "spec": [], "valid": [{ "apply": "TextFieldMark", "def": { "mark": "Mark01-source_ref01" } }], "index$": 0 }] }, 'Source');
        }
        const client = setup.client;
        const struct = setup.struct;
        const isempty = struct.isempty;
        const select = struct.select;
        let source_ref01_data = Object.values(setup.data.existing.source)[0];
        // LOAD
        const source_ref01_ent = client.Source();
        const source_ref01_match_dt0 = {};
        source_ref01_match_dt0.id = source_ref01_data.id;
        const source_ref01_data_dt0 = (await source_ref01_ent.load(source_ref01_match_dt0)).data();
        (0, node_assert_1.default)(source_ref01_data_dt0.id === source_ref01_data.id);
    });
});
function basicSetup(extra) {
    // TODO: fix test def options
    const options = {}; // null
    // TODO: needs test utility to resolve path
    const entityDataFile = node_path_1.default.resolve(__dirname, '../../../../.sdk/test/entity/source/SourceTestData.json');
    // TODO: file ready util needed?
    const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8');
    // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
    const entityData = JSON.parse(entityDataSource);
    options.entity = entityData.existing;
    let client = __1.TronalddumpSDK.test(options, extra);
    const struct = client.utility().struct;
    const merge = struct.merge;
    const transform = struct.transform;
    let idmap = transform(['source01', 'source02', 'source03'], {
        '`$PACK`': ['', {
                '`$KEY`': '`$COPY`',
                '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
            }]
    });
    const env = (0, utility_1.envOverride)({
        'TRONALDDUMP_TEST_SOURCE_ENTID': idmap,
        'TRONALDDUMP_TEST_LIVE': 'FALSE',
        'TRONALDDUMP_TEST_EXPLAIN': 'FALSE',
    });
    idmap = env['TRONALDDUMP_TEST_SOURCE_ENTID'];
    const live = 'TRUE' === env.TRONALDDUMP_TEST_LIVE;
    const transport = (0, live_runner_1.createLiveTransport)();
    if (live) {
        const rawIds = process.env['TRONALDDUMP_TEST_SOURCE_ENTID'];
        idmap = rawIds && rawIds.trim() ? JSON.parse(rawIds) : {};
        if (!idmap || Array.isArray(idmap) || typeof idmap !== 'object') {
            throw new Error('Live ENTID must be a JSON object');
        }
        client = new __1.TronalddumpSDK(merge([
            // FIRST, so the generated fields below win: sdk-test-control.json's
            // test.client.options adds to the live client, it does not redirect it.
            (0, utility_1.liveClientOptions)(),
            {},
            // 'extra || {}', not a bare 'extra': struct.merge returns UNDEFINED when the
            // last entry is undefined, and basicSetup is normally called with no
            // argument at all - so a bare 'extra' silently discarded the apikey
            // and server values above and handed the SDK undefined. Harmless
            // while there was nothing in that object; not harmless now.
            extra || {},
            { system: { fetch: transport.fetch } }
        ]));
    }
    const setup = {
        idmap,
        env,
        options,
        client,
        struct,
        data: entityData,
        explain: 'TRUE' === env.TRONALDDUMP_TEST_EXPLAIN,
        live,
        transport,
        now: Date.now(),
    };
    return setup;
}
//# sourceMappingURL=SourceEntity.test.js.map