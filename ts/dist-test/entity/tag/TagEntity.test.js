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
(0, node_test_1.describe)('TagEntity', async () => {
    // Per-test live pacing. Delay is read from sdk-test-control.json's
    // `test.live.delayMs`; only sleeps when TRONALDDUMP_TEST_LIVE=TRUE.
    (0, node_test_1.afterEach)((0, utility_1.liveDelay)('TRONALDDUMP_TEST_LIVE'));
    (0, node_test_1.test)('instance', async () => {
        const testsdk = __1.TronalddumpSDK.test();
        const ent = testsdk.Tag();
        (0, node_assert_1.default)(null != ent);
    });
    (0, node_test_1.test)('basic', async (t) => {
        const live = 'TRUE' === process.env.TRONALDDUMP_TEST_LIVE;
        for (const op of ['load']) {
            if (!live && (0, utility_1.maybeSkipControl)(t, 'entityOp', 'tag.' + op, live))
                return;
        }
        const setup = basicSetup();
        if (setup.live) {
            return (0, live_entity_1.runLiveEntity)(setup, { "active": true, "alias": { "field": {} }, "fields": [{ "active": true, "name": "count", "req": false, "short": "Total number of quotes found", "type": "`$INTEGER`", "index$": 0 }, { "active": true, "name": "embedded", "req": false, "type": "`$OBJECT`", "index$": 1 }, { "active": true, "name": "id", "req": false, "type": "`$STRING`", "index$": 2 }, { "active": true, "name": "links", "req": false, "short": "HATEOAS links for pagination", "type": "`$OBJECT`", "index$": 3 }, { "active": true, "name": "total", "req": false, "short": "Total number of quotes available", "type": "`$INTEGER`", "index$": 4 }], "id": { "field": "id", "name": "id" }, "name": "tag", "op": { "load": { "input": "data", "name": "load", "points": [{ "active": true, "args": { "params": [{ "active": true, "kind": "param", "name": "id", "orig": "tag_value", "reqd": true, "type": "`$STRING`", "index$": 0 }], "query": [{ "active": true, "example": 0, "kind": "query", "name": "page", "orig": "page", "reqd": false, "type": "`$INTEGER`", "index$": 0 }, { "active": true, "example": 25, "kind": "query", "name": "size", "orig": "size", "reqd": false, "type": "`$INTEGER`", "index$": 1 }] }, "contract": { "id": "GET /tag/{tag_value}", "json": "{\"operationId\":\"getQuotesByTag\",\"parameters\":[{\"description\":\"The tag value to filter quotes\",\"in\":\"path\",\"name\":\"tag_value\",\"required\":true,\"schema\":{\"type\":\"string\"}},{\"description\":\"Page number for pagination\",\"in\":\"query\",\"name\":\"page\",\"required\":false,\"schema\":{\"default\":0,\"type\":\"integer\"}},{\"description\":\"Number of results per page\",\"in\":\"query\",\"name\":\"size\",\"required\":false,\"schema\":{\"default\":25,\"type\":\"integer\"}}],\"protocol\":\"http\",\"responses\":{\"200\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"_embedded\":{\"properties\":{\"quotes\":{\"items\":{\"properties\":{\"_embedded\":{\"properties\":{\"author\":{\"items\":{\"properties\":{\"_links\":{\"description\":\"HATEOAS links related to the author\",\"type\":\"object\"},\"author_id\":{\"description\":\"Unique identifier for the author\",\"type\":\"string\"},\"bio\":{\"description\":\"Biography of the author\",\"type\":\"string\"},\"name\":{\"description\":\"Name of the author\",\"type\":\"string\"},\"slug\":{\"description\":\"URL-friendly slug for the author\",\"type\":\"string\"}},\"type\":\"object\"},\"type\":\"array\"},\"source\":{\"items\":{\"properties\":{\"_links\":{\"description\":\"HATEOAS links related to the source\",\"type\":\"object\"},\"created_at\":{\"description\":\"The date and time when the source was created\",\"format\":\"date-time\",\"type\":\"string\"},\"filename\":{\"description\":\"Filename associated with the source\",\"type\":\"string\"},\"source_id\":{\"description\":\"Unique identifier for the source\",\"type\":\"string\"},\"updated_at\":{\"description\":\"The date and time when the source was last updated\",\"format\":\"date-time\",\"type\":\"string\"},\"url\":{\"description\":\"URL of the source\",\"format\":\"uri\",\"type\":\"string\"}},\"type\":\"object\"},\"type\":\"array\"}},\"type\":\"object\"},\"_links\":{\"description\":\"HATEOAS links related to the quote\",\"type\":\"object\"},\"appeared_at\":{\"description\":\"The date and time when the quote appeared\",\"format\":\"date-time\",\"type\":\"string\"},\"created_at\":{\"description\":\"The date and time when the quote was created in the system\",\"format\":\"date-time\",\"type\":\"string\"},\"quote_id\":{\"description\":\"Unique identifier for the quote\",\"type\":\"string\"},\"tags\":{\"description\":\"Tags associated with the quote\",\"items\":{\"type\":\"string\"},\"type\":\"array\"},\"updated_at\":{\"description\":\"The date and time when the quote was last updated\",\"format\":\"date-time\",\"type\":\"string\"},\"value\":{\"description\":\"The actual quote text\",\"type\":\"string\"}},\"type\":\"object\"},\"type\":\"array\"}},\"type\":\"object\"},\"_links\":{\"description\":\"HATEOAS links for pagination\",\"type\":\"object\"},\"count\":{\"description\":\"Total number of quotes found\",\"type\":\"integer\"},\"total\":{\"description\":\"Total number of quotes available\",\"type\":\"integer\"}},\"type\":\"object\"}}},\"description\":\"Successful response\"},\"404\":{\"description\":\"Tag not found\"},\"500\":{\"description\":\"Internal server error\"}},\"securitySource\":\"unspecified\"}", "source": "openapi3", "version": 1 }, "kind": "http", "method": "GET", "orig": "/tag/{tag_value}", "rename": { "param": { "tag_value": "id" } }, "segments": [{ "lit": "tag" }, { "var": "id" }], "select": { "exist": ["id", "page", "size"] }, "transform": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }, { "active": true, "args": {}, "contract": { "id": "GET /tag", "json": "{\"operationId\":\"getAllTags\",\"parameters\":[],\"protocol\":\"http\",\"responses\":{\"200\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"_embedded\":{\"properties\":{\"tags\":{\"items\":{\"properties\":{\"_links\":{\"description\":\"HATEOAS links related to the tag\",\"type\":\"object\"},\"value\":{\"description\":\"The tag value\",\"type\":\"string\"}},\"type\":\"object\"},\"type\":\"array\"}},\"type\":\"object\"},\"_links\":{\"description\":\"HATEOAS links\",\"type\":\"object\"},\"count\":{\"description\":\"Total number of tags\",\"type\":\"integer\"},\"total\":{\"description\":\"Total number of tags available\",\"type\":\"integer\"}},\"type\":\"object\"}}},\"description\":\"Successful response\"},\"500\":{\"description\":\"Internal server error\"}},\"securitySource\":\"unspecified\"}", "source": "openapi3", "version": 1 }, "kind": "http", "method": "GET", "orig": "/tag", "segments": [{ "lit": "tag" }], "select": {}, "transform": { "req": "`reqdata`", "res": "`body`" }, "index$": 1 }], "key$": "load" } }, "relations": { "ancestors": [] }, "key$": "tag", "name__orig": "tag", "Name": "Tag", "name_": "tag", "name-": "tag", "NAME": "TAG", "index$": 3 }, { "active": true, "entity": "tag", "key$": "BasicTagFlow", "kind": "basic", "name": "BasicTagFlow", "param": {}, "step": [{ "active": true, "data": {}, "input": { "ref": "tag_ref01", "srcdatavar": "tag_ref01_data", "suffix": "_dt0" }, "match": {}, "op": "load", "spec": [], "valid": [{ "apply": "TextFieldMark", "def": { "mark": "Mark01-tag_ref01" } }], "index$": 0 }] }, 'Tag');
        }
        const client = setup.client;
        const struct = setup.struct;
        const isempty = struct.isempty;
        const select = struct.select;
        let tag_ref01_data = Object.values(setup.data.existing.tag)[0];
        // LOAD
        const tag_ref01_ent = client.Tag();
        const tag_ref01_match_dt0 = {};
        tag_ref01_match_dt0.id = tag_ref01_data.id;
        const tag_ref01_data_dt0 = (await tag_ref01_ent.load(tag_ref01_match_dt0)).data();
        (0, node_assert_1.default)(tag_ref01_data_dt0.id === tag_ref01_data.id);
    });
});
function basicSetup(extra) {
    // TODO: fix test def options
    const options = {}; // null
    // TODO: needs test utility to resolve path
    const entityDataFile = node_path_1.default.resolve(__dirname, '../../../../.sdk/test/entity/tag/TagTestData.json');
    // TODO: file ready util needed?
    const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8');
    // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
    const entityData = JSON.parse(entityDataSource);
    options.entity = entityData.existing;
    let client = __1.TronalddumpSDK.test(options, extra);
    const struct = client.utility().struct;
    const merge = struct.merge;
    const transform = struct.transform;
    let idmap = transform(['tag01', 'tag02', 'tag03'], {
        '`$PACK`': ['', {
                '`$KEY`': '`$COPY`',
                '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
            }]
    });
    const env = (0, utility_1.envOverride)({
        'TRONALDDUMP_TEST_TAG_ENTID': idmap,
        'TRONALDDUMP_TEST_LIVE': 'FALSE',
        'TRONALDDUMP_TEST_EXPLAIN': 'FALSE',
    });
    idmap = env['TRONALDDUMP_TEST_TAG_ENTID'];
    const live = 'TRUE' === env.TRONALDDUMP_TEST_LIVE;
    const transport = (0, live_runner_1.createLiveTransport)();
    if (live) {
        const rawIds = process.env['TRONALDDUMP_TEST_TAG_ENTID'];
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
//# sourceMappingURL=TagEntity.test.js.map