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
(0, utility_1.loadEnvLocal)(__dirname + '/../../../.env.local');
(0, node_test_1.describe)('QuoteEntity', async () => {
    // Per-test live pacing. Delay is read from sdk-test-control.json's
    // `test.live.delayMs`; only sleeps when TRONALDDUMP_TEST_LIVE=TRUE.
    (0, node_test_1.afterEach)((0, utility_1.liveDelay)('TRONALDDUMP_TEST_LIVE'));
    (0, node_test_1.test)('instance', async () => {
        const testsdk = __1.TronalddumpSDK.test();
        const ent = testsdk.Quote();
        (0, node_assert_1.default)(null != ent);
    });
    (0, node_test_1.test)('basic', async (t) => {
        const live = 'TRUE' === process.env.TRONALDDUMP_TEST_LIVE;
        for (const op of ['list', 'load']) {
            if (!live && (0, utility_1.maybeSkipControl)(t, 'entityOp', 'quote.' + op, live))
                return;
        }
        const setup = basicSetup();
        if (setup.live) {
            return (0, live_entity_1.runLiveEntity)(setup, { "active": true, "alias": { "field": {} }, "fields": { "appeared_at": { "a": true, "fo": "date-time", "h": "Appeared At", "n": "appeared_at", "r": false, "sh": "The date and time when the quote appeared", "t": "`$STRING`", "key$": "appeared_at", "index$": 0 }, "count": { "a": true, "h": "Count", "n": "count", "r": false, "sh": "Total number of quotes found", "t": "`$INTEGER`", "key$": "count", "index$": 1 }, "created_at": { "a": true, "fo": "date-time", "h": "Created At", "n": "created_at", "r": false, "sh": "The date and time when the quote was created in the system", "t": "`$STRING`", "key$": "created_at", "index$": 2 }, "embedded": { "a": true, "h": "Embedded", "n": "embedded", "r": false, "t": "`$OBJECT`", "key$": "embedded", "index$": 3 }, "id": { "a": true, "h": "Id", "n": "id", "r": false, "t": "`$STRING`", "key$": "id", "index$": 4 }, "links": { "a": true, "h": "Links", "n": "links", "r": false, "sh": "HATEOAS links for pagination", "t": "`$OBJECT`", "key$": "links", "index$": 5 }, "quote_id": { "a": true, "h": "Quote Id", "n": "quote_id", "r": false, "sh": "Unique identifier for the quote", "t": "`$STRING`", "key$": "quote_id", "index$": 6 }, "tags": { "a": true, "h": "Tags", "n": "tags", "r": false, "sh": "Tags associated with the quote", "t": "`$ARRAY`", "key$": "tags", "index$": 7 }, "total": { "a": true, "h": "Total", "n": "total", "r": false, "sh": "Total number of quotes available", "t": "`$INTEGER`", "key$": "total", "index$": 8 }, "updated_at": { "a": true, "fo": "date-time", "h": "Updated At", "n": "updated_at", "r": false, "sh": "The date and time when the quote was last updated", "t": "`$STRING`", "key$": "updated_at", "index$": 9 }, "value": { "a": true, "h": "Value", "n": "value", "r": false, "sh": "The actual quote text", "t": "`$STRING`", "key$": "value", "index$": 10 } }, "id": { "field": "id", "name": "id" }, "name": "quote", "op": { "list": { "input": "data", "name": "list", "points": [{ "a": true, "co": { "id": "GET /random/quote", "source": "openapi3", "version": 2 }, "g": {}, "k": "http", "m": "GET", "o": "/random/quote", "q": {}, "r": {}, "s": [{ "lit": "random" }, { "lit": "quote" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }], "key$": "list" }, "load": { "input": "data", "name": "load", "points": [{ "a": true, "co": { "id": "GET /search/quote", "source": "openapi3", "version": 2 }, "g": { "query": [{ "a": true, "ex": 0, "k": "query", "n": "page", "or": "page", "r": false, "t": "`$INTEGER`", "index$": 0 }, { "a": true, "k": "query", "n": "query", "or": "query", "r": true, "t": "`$STRING`", "index$": 1 }, { "a": true, "ex": 25, "k": "query", "n": "size", "or": "size", "r": false, "t": "`$INTEGER`", "index$": 2 }] }, "k": "http", "m": "GET", "o": "/search/quote", "q": { "exist": ["page", "query", "size"] }, "r": {}, "s": [{ "lit": "search" }, { "lit": "quote" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }, { "a": true, "co": { "id": "GET /quote/{quote_id}", "source": "openapi3", "version": 2 }, "g": { "params": [{ "a": true, "k": "param", "n": "id", "or": "quote_id", "r": true, "t": "`$STRING`", "index$": 0 }] }, "k": "http", "m": "GET", "o": "/quote/{quote_id}", "q": { "exist": ["id"] }, "r": { "param": { "quote_id": "id" } }, "s": [{ "lit": "quote" }, { "var": "id" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }], "key$": "load" } }, "relations": { "ancestors": [] }, "key$": "quote", "name__orig": "quote", "Name": "Quote", "name_": "quote", "name-": "quote", "NAME": "QUOTE", "index$": 1 }, { "active": true, "entity": "quote", "key$": "BasicQuoteFlow", "kind": "basic", "name": "BasicQuoteFlow", "param": {}, "step": [{ "a": true, "d": {}, "i": {}, "m": {}, "o": "list", "s": [], "v": [{ "apply": "ItemExists", "def": { "ref": "quote_ref01" } }], "index$": 0 }, { "a": true, "d": {}, "i": { "ref": "quote_ref01", "srcdatavar": "quote_ref01_data", "suffix": "_dt0" }, "m": { "id": "quote01" }, "o": "load", "s": [], "v": [{ "apply": "TextFieldMark", "def": { "mark": "Mark01-quote_ref01" } }], "index$": 1 }] }, 'Quote', { "GET /random/quote": { "protocol": "http", "operationId": "getRandomQuote", "responses": { "200": { "description": "Successful response", "content": { "application/json": { "schema": { "type": "object", "properties": { "appeared_at": { "description": "The date and time when the quote appeared", "format": "date-time", "key$": "appeared_at", "type": "string" }, "created_at": { "description": "The date and time when the quote was created in the system", "format": "date-time", "key$": "created_at", "type": "string" }, "quote_id": { "description": "Unique identifier for the quote", "key$": "quote_id", "type": "string" }, "tags": { "description": "Tags associated with the quote", "items": { "type": "string" }, "key$": "tags", "type": "array" }, "updated_at": { "description": "The date and time when the quote was last updated", "format": "date-time", "key$": "updated_at", "type": "string" }, "value": { "description": "The actual quote text", "key$": "value", "type": "string" }, "_links": { "description": "HATEOAS links related to the quote", "key$": "_links", "type": "object" }, "_embedded": { "key$": "_embedded", "properties": { "author": { "items": { "properties": { "_links": { "description": "HATEOAS links related to the author", "type": "object" }, "author_id": { "description": "Unique identifier for the author", "type": "string" }, "bio": { "description": "Biography of the author", "type": "string" }, "name": { "description": "Name of the author", "type": "string" }, "slug": { "description": "URL-friendly slug for the author", "type": "string" } }, "type": "object", "x-ref": "#/components/schemas/Author" }, "type": "array" }, "source": { "items": { "properties": { "_links": { "description": "HATEOAS links related to the source", "type": "object" }, "created_at": { "description": "The date and time when the source was created", "format": "date-time", "type": "string" }, "filename": { "description": "Filename associated with the source", "type": "string" }, "source_id": { "description": "Unique identifier for the source", "type": "string" }, "updated_at": { "description": "The date and time when the source was last updated", "format": "date-time", "type": "string" }, "url": { "description": "URL of the source", "format": "uri", "type": "string" } }, "type": "object", "x-ref": "#/components/schemas/Source" }, "type": "array" } }, "type": "object" } }, "x-ref": "#/components/schemas/Quote", "index$": 0 } } } }, "404": { "description": "Quote not found" }, "500": { "description": "Internal server error" } }, "parameters": [], "securitySource": "unspecified" }, "GET /search/quote": { "protocol": "http", "operationId": "searchQuotes", "responses": { "200": { "description": "Successful response", "content": { "application/json": { "schema": { "type": "object", "properties": { "count": { "description": "Total number of quotes found", "key$": "count", "type": "integer" }, "total": { "description": "Total number of quotes available", "key$": "total", "type": "integer" }, "_embedded": { "key$": "_embedded", "properties": { "quotes": { "items": { "properties": { "_embedded": { "key$": "_embedded", "properties": { "author": { "items": { "properties": { "_links": { "description": "HATEOAS links related to the author", "type": "object" }, "author_id": { "description": "Unique identifier for the author", "type": "string" }, "bio": { "description": "Biography of the author", "type": "string" }, "name": { "description": "Name of the author", "type": "string" }, "slug": { "description": "URL-friendly slug for the author", "type": "string" } }, "type": "object", "x-ref": "#/components/schemas/Author" }, "type": "array" }, "source": { "items": { "properties": { "_links": { "description": "HATEOAS links related to the source", "type": "object" }, "created_at": { "description": "The date and time when the source was created", "format": "date-time", "type": "string" }, "filename": { "description": "Filename associated with the source", "type": "string" }, "source_id": { "description": "Unique identifier for the source", "type": "string" }, "updated_at": { "description": "The date and time when the source was last updated", "format": "date-time", "type": "string" }, "url": { "description": "URL of the source", "format": "uri", "type": "string" } }, "type": "object", "x-ref": "#/components/schemas/Source" }, "type": "array" } }, "type": "object" }, "_links": { "description": "HATEOAS links related to the quote", "key$": "_links", "type": "object" }, "appeared_at": { "description": "The date and time when the quote appeared", "format": "date-time", "key$": "appeared_at", "type": "string" }, "created_at": { "description": "The date and time when the quote was created in the system", "format": "date-time", "key$": "created_at", "type": "string" }, "quote_id": { "description": "Unique identifier for the quote", "key$": "quote_id", "type": "string" }, "tags": { "description": "Tags associated with the quote", "items": { "type": "string" }, "key$": "tags", "type": "array" }, "updated_at": { "description": "The date and time when the quote was last updated", "format": "date-time", "key$": "updated_at", "type": "string" }, "value": { "description": "The actual quote text", "key$": "value", "type": "string" } }, "type": "object", "x-ref": "#/components/schemas/Quote" }, "type": "array" } }, "type": "object" }, "_links": { "description": "HATEOAS links for pagination", "key$": "_links", "type": "object" } }, "x-ref": "#/components/schemas/QuoteSearchResponse", "index$": 0 } } } }, "404": { "description": "No quotes found" }, "500": { "description": "Internal server error" } }, "parameters": [{ "name": "query", "in": "query", "description": "Search query string", "required": true, "schema": { "type": "string" }, "index$": 0 }, { "name": "page", "in": "query", "description": "Page number for pagination", "required": false, "schema": { "type": "integer", "default": 0 }, "index$": 1 }, { "name": "size", "in": "query", "description": "Number of results per page", "required": false, "schema": { "type": "integer", "default": 25 }, "index$": 2 }], "securitySource": "unspecified" }, "GET /quote/{quote_id}": { "protocol": "http", "operationId": "getQuoteById", "responses": { "200": { "description": "Successful response", "content": { "application/json": { "schema": { "type": "object", "properties": { "appeared_at": { "description": "The date and time when the quote appeared", "format": "date-time", "key$": "appeared_at", "type": "string" }, "created_at": { "description": "The date and time when the quote was created in the system", "format": "date-time", "key$": "created_at", "type": "string" }, "quote_id": { "description": "Unique identifier for the quote", "key$": "quote_id", "type": "string" }, "tags": { "description": "Tags associated with the quote", "items": { "type": "string" }, "key$": "tags", "type": "array" }, "updated_at": { "description": "The date and time when the quote was last updated", "format": "date-time", "key$": "updated_at", "type": "string" }, "value": { "description": "The actual quote text", "key$": "value", "type": "string" }, "_links": { "description": "HATEOAS links related to the quote", "key$": "_links", "type": "object" }, "_embedded": { "key$": "_embedded", "properties": { "author": { "items": { "properties": { "_links": { "description": "HATEOAS links related to the author", "type": "object" }, "author_id": { "description": "Unique identifier for the author", "type": "string" }, "bio": { "description": "Biography of the author", "type": "string" }, "name": { "description": "Name of the author", "type": "string" }, "slug": { "description": "URL-friendly slug for the author", "type": "string" } }, "type": "object", "x-ref": "#/components/schemas/Author" }, "type": "array" }, "source": { "items": { "properties": { "_links": { "description": "HATEOAS links related to the source", "type": "object" }, "created_at": { "description": "The date and time when the source was created", "format": "date-time", "type": "string" }, "filename": { "description": "Filename associated with the source", "type": "string" }, "source_id": { "description": "Unique identifier for the source", "type": "string" }, "updated_at": { "description": "The date and time when the source was last updated", "format": "date-time", "type": "string" }, "url": { "description": "URL of the source", "format": "uri", "type": "string" } }, "type": "object", "x-ref": "#/components/schemas/Source" }, "type": "array" } }, "type": "object" } }, "x-ref": "#/components/schemas/Quote", "index$": 0 } } } }, "404": { "description": "Quote not found" }, "500": { "description": "Internal server error" } }, "parameters": [{ "name": "quote_id", "in": "path", "description": "The unique identifier of the quote", "required": true, "schema": { "type": "string" }, "index$": 0 }], "securitySource": "unspecified" } });
        }
        const client = setup.client;
        const struct = setup.struct;
        const isempty = struct.isempty;
        const select = struct.select;
        let quote_ref01_data = Object.values(setup.data.existing.quote)[0];
        // LIST
        const quote_ref01_ent = client.Quote();
        const quote_ref01_match = {};
        const quote_ref01_list = (await quote_ref01_ent.list(quote_ref01_match)).map((e) => e.data());
        // LOAD
        const quote_ref01_match_dt0 = {};
        quote_ref01_match_dt0.id = quote_ref01_data.id;
        const quote_ref01_data_dt0 = (await quote_ref01_ent.load(quote_ref01_match_dt0)).data();
        (0, node_assert_1.default)(quote_ref01_data_dt0.id === quote_ref01_data.id);
    });
});
function basicSetup(extra) {
    // TODO: fix test def options
    const options = {}; // null
    // TODO: needs test utility to resolve path
    const entityDataFile = node_path_1.default.resolve(__dirname, '../../../../.sdk/test/entity/quote/QuoteTestData.json');
    // TODO: file ready util needed?
    const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8');
    // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
    const entityData = JSON.parse(entityDataSource);
    options.entity = entityData.existing;
    let client = __1.TronalddumpSDK.test(options, extra);
    const struct = client.utility().struct;
    const merge = struct.merge;
    const transform = struct.transform;
    let idmap = transform(['quote01', 'quote02', 'quote03'], {
        '`$PACK`': ['', {
                '`$KEY`': '`$COPY`',
                '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
            }]
    });
    const env = (0, utility_1.envOverride)({
        'TRONALDDUMP_TEST_QUOTE_ENTID': idmap,
        'TRONALDDUMP_TEST_LIVE': 'FALSE',
        'TRONALDDUMP_TEST_EXPLAIN': 'FALSE',
    });
    idmap = env['TRONALDDUMP_TEST_QUOTE_ENTID'];
    const live = 'TRUE' === env.TRONALDDUMP_TEST_LIVE;
    const transport = (0, live_runner_1.createLiveTransport)();
    if (live) {
        const rawIds = process.env['TRONALDDUMP_TEST_QUOTE_ENTID'];
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
//# sourceMappingURL=QuoteEntity.test.js.map