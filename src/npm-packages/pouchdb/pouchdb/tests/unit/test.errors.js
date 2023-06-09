'use strict';

var PouchDB = require('../../packages/node_modules/pouchdb-for-coverage');
var generateErrorFromResponse = PouchDB.utils.generateErrorFromResponse;

require('chai').should();

//
// TODO: a lot of these errors are kind of misleading, or the error
// message gets stripped out during processing. We should fix that.
// However, these tests represent the state of the code circa 5.3.2, just
// so we can have a record of the expected behavior.
//

describe('test.errors.js', function () {

  // these were generated by the main test suite

  it('test generateErrorFromResponse() #1', function () {
    var response = {"error": "not_found", "reason": "missing"};
    var err = generateErrorFromResponse(response);
    err.status.should.equal(500);
    err.name.should.equal("not_found");
    err.message.should.equal("missing");
    err.stack.should.be.a("string");
  });

  it('test generateErrorFromResponse() #2', function () {
    var response = {"error": "not_found", "reason": "no_db_file"};
    var err = generateErrorFromResponse(response);
    err.status.should.equal(500);
    err.name.should.equal("not_found");
    err.message.should.equal("no_db_file");
    err.stack.should.be.a("string");
  });

  it('test generateErrorFromResponse() #3', function () {
    var response = {
      "error": "query_parse_error",
      "reason": "`keys` is incompatible with `key`, `start_key` and `end_key`"
    };
    var err = generateErrorFromResponse(response);
    err.status.should.equal(500);
    err.name.should.equal("query_parse_error");
    err.message.should.equal("`keys` is incompatible with `key`, `start_key` and `end_key`");
    err.stack.should.be.a("string");
  });

  it('test generateErrorFromResponse() #4', function () {
    var response = {
      "error": "query_parse_error",
      "reason": "`keys` must be an array of strings."
    };
    var err = generateErrorFromResponse(response);
    err.status.should.equal(500);
    err.name.should.equal("query_parse_error");
    err.message.should.equal("`keys` must be an array of strings.");
    err.stack.should.be.a("string");
  });

  it('test generateErrorFromResponse() #5', function () {
    var response = {"missing": "2-fake"};
    var err = generateErrorFromResponse(response);
    err.status.should.equal(500);
    err.name.should.equal("unknown");
  });

  it('test generateErrorFromResponse() #6', function () {
    var response = {
      "error": "missing_stub",
      "reason": "id:bin_doc, name:bar.txt"
    };
    var err = generateErrorFromResponse(response);
    err.status.should.equal(500);
    err.name.should.equal("missing_stub");
  });

  it('test generateErrorFromResponse() #7', function () {
    var response = {
      "error": "missing_stub",
      "reason": "id:stubby, name:foo.txt"
    };
    var err = generateErrorFromResponse(response);
    err.status.should.equal(500);
    err.name.should.equal("missing_stub");
  });

  it('test generateErrorFromResponse() #8', function () {
    var response = {
      "error": "bad_request",
      "reason": "Only reserved document ids may start with underscore."
    };
    var err = generateErrorFromResponse(response);
    err.status.should.equal(500);
    err.name.should.equal("bad_request");
    err.message.should.equal("Only reserved document ids may start with " +
      "underscore.");
  });

  it('test generateErrorFromResponse() #9', function () {
    var response = {"error": "conflict", "reason": "Document update conflict."};
    var err = generateErrorFromResponse(response);
    err.status.should.equal(409);
    err.name.should.equal("conflict");
    err.message.should.equal("Document update conflict.");
    err.stack.should.be.a("string");
  });

  it('test generateErrorFromResponse() #10', function () {
    var response = {"error": "bad_request", "reason": "Invalid rev format"};
    var err = generateErrorFromResponse(response);
    err.status.should.equal(500);
    err.name.should.equal("bad_request");
    err.message.should.equal("Invalid rev format");
    err.stack.should.be.a("string");
  });

  it('test generateErrorFromResponse() #11', function () {
    var response = {"error": "badarg", "reason": "33"};
    var err = generateErrorFromResponse(response);
    err.status.should.equal(500);
    err.name.should.equal("badarg");
    err.message.should.equal("33");
    err.stack.should.be.a("string");
  });

  it('test generateErrorFromResponse() #12', function () {
    var response = {
      "error": "bad_request",
      "reason": "Referer header required."
    };
    var err = generateErrorFromResponse(response);
    err.status.should.equal(500);
    err.name.should.equal("bad_request");
    err.message.should.equal("Referer header required.");
    err.stack.should.be.a("string");
  });

  it('test generateErrorFromResponse() #13', function () {
    var response = {"status": 400};
    var err = generateErrorFromResponse(response);
    err.status.should.equal(400);
    err.name.should.equal("unknown");
  });

  it('test generateErrorFromResponse() #14', function () {
    var response = {
      "id": "77c03c2755ae08600a0ff58aebc513fe",
      "error": "conflict",
      "reason": "Document update conflict."
    };
    var err = generateErrorFromResponse(response);
    err.status.should.equal(409);
    err.name.should.equal("conflict");
    err.message.should.equal(response.reason);
    err.stack.should.be.a("string");
    err.id.should.equal("77c03c2755ae08600a0ff58aebc513fe");
  });

  it('test generateErrorFromResponse() #15', function () {
    var response = {"error": "not_found", "reason": "deleted"};
    var err = generateErrorFromResponse(response);
    err.status.should.equal(500);
    err.name.should.equal("not_found");
    err.message.should.equal(response.reason);
    err.stack.should.be.a("string");
  });

  it('test generateErrorFromResponse() #16', function () {
    var response = {
      "error": "doc_validation",
      "reason": "Bad special document member: _zing"
    };
    var err = generateErrorFromResponse(response);
    err.status.should.equal(500);
    err.name.should.equal("doc_validation");
    err.message.should.equal("Bad special document member: _zing");
    err.stack.should.be.a("string");
  });

  it('test generateErrorFromResponse() #23', function () {
    var response = {
      "error": "bad_request",
      "reason": "Document id must be a string"
    };
    var err = generateErrorFromResponse(response);
    err.status.should.equal(500);
    err.name.should.equal("bad_request");
    err.message.should.equal(response.reason);
    err.stack.should.be.a("string");
  });

  it('test generateErrorFromResponse() #26', function () {
    var response = {
      "id": "doc1",
      "rev": "1-x",
      "error": "unauthorized",
      "reason": "Document must have a foo."
    };
    var err = generateErrorFromResponse(response);
    err.status.should.equal(500);
    err.name.should.equal("unauthorized");
    err.message.should.equal(response.reason);
    err.stack.should.be.a("string");
    err.id.should.equal("doc1");
  });

  it('test generateErrorFromResponse() #27', function () {
    var response = {
      "error": "file_exists",
      "reason": "The database could not be created, the file already exists."
    };
    var err = generateErrorFromResponse(response);
    err.status.should.equal(500);
    err.name.should.equal("file_exists");
    err.message.should.equal(response.reason);
    err.stack.should.be.a("string");
  });

  it('test generateErrorFromResponse() #29', function () {
    var response = {"error": "not_found", "reason": "missing json key: odd"};
    var err = generateErrorFromResponse(response);
    err.status.should.equal(500);
    err.name.should.equal("not_found");
    err.message.should.equal(response.reason);
    err.stack.should.be.a("string");
  });

  it('test generateErrorFromResponse() #30', function () {
    var response = {
      "error": "not_found",
      "reason": "missing json key: filters"
    };
    var err = generateErrorFromResponse(response);
    err.status.should.equal(500);
    err.name.should.equal("not_found");
    err.message.should.equal(response.reason);
    err.stack.should.be.a("string");
  });

  it('test generateErrorFromResponse() #31', function () {
    var response = {"error": "not_found", "reason": "missing json key: views"};
    var err = generateErrorFromResponse(response);
    err.status.should.equal(500);
    err.name.should.equal("not_found");
    err.message.should.equal(response.reason);
    err.stack.should.be.a("string");
  });

  it('test generateErrorFromResponse() #32', function () {
    var response = {
      "error": "bad_request",
      "reason": "`view` filter parameter is not provided."
    };
    var err = generateErrorFromResponse(response);
    err.status.should.equal(500);
    err.name.should.equal("bad_request");
    err.message.should.equal(response.reason);
    err.stack.should.be.a("string");
  });

  it('test generateErrorFromResponse() #33', function () {
    var response = {
      "status": 404,
      "name": "not_found",
      "message": "missing",
      "error": true,
      "reason": "missing"
    };
    var err = generateErrorFromResponse(response);
    err.status.should.equal(404);
    err.name.should.equal("not_found");
    err.message.should.equal("missing");
    err.stack.should.be.a("string");
    err.error.should.equal(true);
  });

  it('test generateErrorFromResponse() #77', function () {
    var response = {"error": "unknown_error", "reason": "function_clause"};
    var err = generateErrorFromResponse(response);
    err.status.should.equal(500);
    err.name.should.equal("unknown_error");
  });

  it('test generateErrorFromResponse() #78', function () {
    var response = "<!doctype html><html>YO THIS IS AN ERROR</html>";
    var err = generateErrorFromResponse(response);
    err.status.should.equal(500);
  });

  it('test generateErrorFromResponse() #81', function () {
    var response = {
      "id": "0596A614-2001-05B6-93C3-6B3B6504CD05",
      "rev": "1-8156ee4ba7898510bfaf868668a81e4f",
      "error": "forbidden",
      "reason": "Document must have a foo."
    };
    var err = generateErrorFromResponse(response);
    err.status.should.equal(500);
    err.name.should.equal("forbidden");
    err.message.should.equal(response.reason);
    err.stack.should.be.a("string");
    err.id.should.equal("0596A614-2001-05B6-93C3-6B3B6504CD05");
  });

  it('test generateErrorFromResponse() #87', function () {
    var response = {
      "id": "45E4D1A4-B01D-6898-B8FF-035B2C76AB6B",
      "rev": "1-a531a7aa3fb56bdae69f7ce4113486c4",
      "error": "forbidden",
      "reason": {"foo": "is object"}
    };
    var err = generateErrorFromResponse(response);
    err.status.should.equal(500);
    err.name.should.equal("forbidden");
    err.message.should.equal(response.reason);
    err.stack.should.be.a("string");
    err.id.should.equal("45E4D1A4-B01D-6898-B8FF-035B2C76AB6B");
  });

  it('test generateErrorFromResponse() #88', function () {
    var response = {
      "id": "5F99EF37-DABA-DACB-A58E-4C6D76511985",
      "rev": "1-17702a69add79ff7d9006d43b9262ec2",
      "error": "forbidden",
      "reason": "Document foo is string"
    };
    var err = generateErrorFromResponse(response);
    err.status.should.equal(500);
    err.name.should.equal("forbidden");
    err.message.should.equal(response.reason);
    err.stack.should.be.a("string");
    err.id.should.equal("5F99EF37-DABA-DACB-A58E-4C6D76511985");
  });

  it('test generateErrorFromResponse() #89', function () {
    var response = {
      "id": "1A3F4028-2E5D-B12F-80BB-ED5234BF6E02",
      "rev": "1-d89df54b4ec86054c05025137143b5e8",
      "error": "unauthorized",
      "reason": {"foo": "is object"}
    };
    var err = generateErrorFromResponse(response);
    err.status.should.equal(500);
    err.name.should.equal("unauthorized");
    err.message.should.equal(response.reason);
    err.stack.should.be.a("string");
    err.id.should.equal("1A3F4028-2E5D-B12F-80BB-ED5234BF6E02");
  });

  it('test generateErrorFromResponse() #90', function () {
    var response = {
      "id": "36824FB1-C1E6-76EE-BF7E-4D3614A36736",
      "rev": "1-3b1c04d44d17dbfef815433693dc26d4",
      "error": "unauthorized",
      "reason": "Document foo is string"
    };
    var err = generateErrorFromResponse(response);
    err.status.should.equal(500);
    err.name.should.equal("unauthorized");
    err.message.should.equal(response.reason);
    err.stack.should.be.a("string");
    err.id.should.equal("36824FB1-C1E6-76EE-BF7E-4D3614A36736");
  });

  it('test generateErrorFromResponse() #91', function () {
    var response = {
      "id": "6DA30042-600E-2581-8BD8-8A92F79CE53E",
      "rev": "1-6a36583f7500873176466ffc1e2c8b41",
      "error": "unauthorized",
      "reason": "go away, no picture"
    };
    var err = generateErrorFromResponse(response);
    err.status.should.equal(500);
    err.name.should.equal("unauthorized");
    err.message.should.equal(response.reason);
    err.stack.should.be.a("string");
    err.id.should.equal("6DA30042-600E-2581-8BD8-8A92F79CE53E");
  });

  it('test generateErrorFromResponse() #93', function () {
    var response = {
      "id": "foo1",
      "rev": "1-ba250664825530e39299e870460f77d6",
      "error": "unauthorized",
      "reason": "go away, no picture"
    };
    var err = generateErrorFromResponse(response);
    err.status.should.equal(500);
    err.name.should.equal("unauthorized");
    err.message.should.equal(response.reason);
    err.stack.should.be.a("string");
    err.id.should.equal("foo1");
  });

  it('test generateErrorFromResponse() #96', function () {
    var response = {
      "id": "77c03c2755ae08600a0ff58aebcaef19",
      "rev": "1-967a00dff5e02add41819138abb3284d",
      "error": "forbidden",
      "reason": "Document must have a foo."
    };
    var err = generateErrorFromResponse(response);
    err.status.should.equal(500);
    err.name.should.equal("forbidden");
    err.message.should.equal(response.reason);
    err.stack.should.be.a("string");
    err.id.should.equal("77c03c2755ae08600a0ff58aebcaef19");
  });

  it('test generateErrorFromResponse() #102', function () {
    var response = {
      "id": "77c03c2755ae08600a0ff58aebcb650f",
      "rev": "1-e13a955ef7781be762def6793e1e789d",
      "error": "forbidden",
      "reason": "Document foo is string"
    };
    var err = generateErrorFromResponse(response);
    err.status.should.equal(500);
    err.name.should.equal("forbidden");
    err.message.should.equal(response.reason);
    err.stack.should.be.a("string");
    err.id.should.equal("77c03c2755ae08600a0ff58aebcb650f");
  });

  it('test generateErrorFromResponse() #103', function () {
    var response = {
      "id": "77c03c2755ae08600a0ff58aebcb7be6",
      "rev": "1-eb291f6f3b68b37993b33ed7e5c68ebc",
      "error": "forbidden",
      "reason": {"foo": "is object"}
    };
    var err = generateErrorFromResponse(response);
    err.status.should.equal(500);
    err.name.should.equal("forbidden");
    err.message.should.equal(response.reason);
    err.stack.should.be.a("string");
    err.id.should.equal("77c03c2755ae08600a0ff58aebcb7be6");
  });

  // these were generated from the map/reduce test suite

  it('test generateErrorFromResponse() via map/reduce #1', function () {
    var response = {"error": "not_found", "reason": "missing"};
    var err = generateErrorFromResponse(response);
    err.status.should.equal(500);
    err.name.should.equal("not_found");
    err.message.should.equal("missing");
    err.stack.should.be.a("string");
  });

  it('test generateErrorFromResponse() via map/reduce #2', function () {
    var response = {"error": "not_found", "reason": "no_db_file"};
    var err = generateErrorFromResponse(response);
    err.status.should.equal(500);
    err.name.should.equal("not_found");
    err.message.should.equal(response.reason);
    err.stack.should.be.a("string");
  });

  it('test generateErrorFromResponse() via map/reduce #3', function () {
    var response = {
      "error": "invalid_value",
      "reason": "builtin _sum function requires map values to be numbers or " +
      "lists of numbers"
    };
    var err = generateErrorFromResponse(response);
    err.status.should.equal(500);
    err.name.should.equal("invalid_value");
    err.message.should.equal(response.reason);
    err.stack.should.be.a("string");
  });

  it('test generateErrorFromResponse() via map/reduce #4', function () {
    var response = {
      "error": "query_parse_error",
      "reason": "Invalid value for positive integer: \"-1\""
    };
    var err = generateErrorFromResponse(response);
    err.status.should.equal(500);
    err.name.should.equal("query_parse_error");
    err.message.should.equal("Invalid value for positive integer: \"-1\"");
    err.stack.should.be.a("string");
  });

  it('test generateErrorFromResponse() via map/reduce #5', function () {
    var response = {
      "error": "query_parse_error",
      "reason": "Invalid value for integer: \"exact\""
    };
    var err = generateErrorFromResponse(response);
    err.status.should.equal(500);
    err.name.should.equal("query_parse_error");
    err.message.should.equal("Invalid value for integer: \"exact\"");
    err.stack.should.be.a("string");
  });

  it('test generateErrorFromResponse() via map/reduce #6', function () {
    var response = {
      "error": "query_parse_error",
      "reason": "Invalid value for integer: \"1a\""
    };
    var err = generateErrorFromResponse(response);
    err.status.should.equal(500);
    err.name.should.equal("query_parse_error");
    err.message.should.equal("Invalid value for integer: \"1a\"");
    err.stack.should.be.a("string");
  });

  it('test generateErrorFromResponse() via map/reduce #7', function () {
    var response = {
      "error": "query_parse_error",
      "reason": "No rows can match your key range, reverse your start_key " +
      "and end_key or set descending=true"
    };
    var err = generateErrorFromResponse(response);
    err.status.should.equal(500);
    err.name.should.equal("query_parse_error");
    err.message.should.equal(response.reason);
    err.stack.should.be.a("string");
  });

  it('test generateErrorFromResponse() via map/reduce #8', function () {
    var response = {
      "error": "query_parse_error",
      "reason": "`include_docs` is invalid for reduce"
    };
    var err = generateErrorFromResponse(response);
    err.status.should.equal(500);
    err.name.should.equal("query_parse_error");
    err.message.should.equal(response.reason);
    err.stack.should.be.a("string");
  });

  it('test generateErrorFromResponse() via map/reduce #9', function () {
    var response = {
      "error": "query_parse_error",
      "reason": "Multi-key fetchs for reduce views must use `group=true`"
    };
    var err = generateErrorFromResponse(response);
    err.status.should.equal(500);
    err.name.should.equal("query_parse_error");
    err.message.should.equal(response.reason);
    err.stack.should.be.a("string");
  });

  it('test generateErrorFromResponse() via map/reduce #10', function () {
    var response = {"error": "not_found", "reason": "missing_named_view"};
    var err = generateErrorFromResponse(response);
    err.status.should.equal(500);
    err.name.should.equal("not_found");
    err.message.should.equal("missing_named_view");
    err.stack.should.be.a("string");
  });

  it('test generateErrorFromResponse() via map/reduce #11', function () {
    var response = {"error": "not_found", "reason": "deleted"};
    var err = generateErrorFromResponse(response);
    err.status.should.equal(500);
    err.name.should.equal("not_found");
    err.message.should.equal("deleted");
    err.stack.should.be.a("string");
  });

  it('test generateErrorFromResponse() via map/reduce #12', function () {
    var response = {"error": "unknown_error", "reason": "function_clause"};
    var err = generateErrorFromResponse(response);
    err.status.should.equal(500);
    err.name.should.equal("unknown_error");
    err.message.should.equal("function_clause");
    err.stack.should.be.a("string");
  });


});
