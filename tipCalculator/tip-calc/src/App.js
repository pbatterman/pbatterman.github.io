"use strict";
exports.__esModule = true;
exports.App = void 0;
var react_1 = require("react");
var react_spectrum_1 = require("@adobe/react-spectrum");
require("./App.css");
var App = function () {
  var _a = (0, react_1.useState)(20),
    tipPercent = _a[0],
    setTipPercent = _a[1];
  var _b = (0, react_1.useState)(0),
    tipValue = _b[0],
    setTipValue = _b[1];
  var _c = (0, react_1.useState)(0),
    total = _c[0],
    setTotal = _c[1];
  var _d = (0, react_1.useState)(0),
    overrideTotal = _d[0],
    setOverrideTotal = _d[1];
  var _e = (0, react_1.useState)(15),
    newTipPercent = _e[0],
    setNewTipPercent = _e[1];
  var _f = (0, react_1.useState)(0),
    newTip = _f[0],
    setNewTip = _f[1];
  (0, react_1.useEffect)(
    function () {
      calculateTotal(tipPercent, tipValue);
    },
    [tipPercent, tipValue]
  );
  (0, react_1.useEffect)(
    function () {
      calculateNewTip();
    },
    [overrideTotal, total, newTipPercent]
  );
  var subtractTip = function () {
    return setTipPercent(Math.round(tipPercent - 1));
  };
  var addTip = function () {
    return setTipPercent(Math.round(tipPercent + 1));
  };
  var calculateTotal = function (percent, value) {
    // percent * total = value
    // total = value/percent
    if (percent && value) {
      var realPercent = percent * 0.01;
      var calcTotal = (value * 1.0) / realPercent;
      setTotal(calcTotal);
    }
  };
  var calculateNewTip = function () {
    var totalToUse = overrideTotal ? overrideTotal : total;
    if (totalToUse) {
      var percent = newTipPercent * 0.01;
      var calcTip = totalToUse * 1.0 * percent;
      setNewTip(calcTip);
    }
  };
  var getNewTotal = function () {
    var totalToUse = overrideTotal ? overrideTotal : total;
    if (newTip && totalToUse) {
      return newTip + totalToUse;
    }
    return 0;
  };
  return (
    <div className="wrapper">
      <react_spectrum_1.Flex
        direction="column"
        width="size-3000"
        gap="size-100"
      >
        <react_spectrum_1.Flex gap="size-100">
          <react_spectrum_1.ToggleButton
            flex="1"
            isEmphasized
            isSelected={tipPercent === 20}
            onPress={function () {
              return setTipPercent(20);
            }}
          >
            20
          </react_spectrum_1.ToggleButton>
          <react_spectrum_1.ToggleButton
            flex="1"
            isEmphasized
            isSelected={tipPercent === 23}
            onPress={function () {
              return setTipPercent(23);
            }}
          >
            23
          </react_spectrum_1.ToggleButton>
          <react_spectrum_1.ToggleButton
            flex="1"
            isEmphasized
            isSelected={tipPercent === 25}
            onPress={function () {
              return setTipPercent(25);
            }}
          >
            25
          </react_spectrum_1.ToggleButton>
        </react_spectrum_1.Flex>
        <react_spectrum_1.Flex gap="size-100">
          <react_spectrum_1.Flex
            direction="column"
            width="100%"
            alignItems="center"
          >
            <react_spectrum_1.Heading level={2} margin="0">
              {"".concat(tipPercent, "%")}
            </react_spectrum_1.Heading>
          </react_spectrum_1.Flex>
          <react_spectrum_1.Button variant="primary" onPress={subtractTip}>
            -
          </react_spectrum_1.Button>
          <react_spectrum_1.Button variant="primary" onPress={addTip}>
            +
          </react_spectrum_1.Button>
        </react_spectrum_1.Flex>
        <react_spectrum_1.Flex gap="size-100">
          <react_spectrum_1.NumberField
            label="Tip $"
            width="100%"
            minValue={0}
            onChange={setTipValue}
            formatOptions={{
              style: "currency",
              currency: "USD",
            }}
          />
        </react_spectrum_1.Flex>
        <react_spectrum_1.Flex gap="size-100">
          <react_spectrum_1.Flex
            UNSAFE_className={overrideTotal > 0 ? "overridden" : ""}
            direction="column"
            width="25%"
          >
            <react_spectrum_1.Text>Total</react_spectrum_1.Text>
            <react_spectrum_1.Heading level={2} margin="0">
              {"$".concat(total)}
            </react_spectrum_1.Heading>
          </react_spectrum_1.Flex>
          {overrideTotal > 0 && (
            <react_spectrum_1.Flex
              UNSAFE_className="override"
              direction="column"
              width="25%"
            >
              <react_spectrum_1.Text>Override</react_spectrum_1.Text>
              <react_spectrum_1.Heading level={2} margin="0">
                {"$".concat(overrideTotal)}
              </react_spectrum_1.Heading>
            </react_spectrum_1.Flex>
          )}
          <react_spectrum_1.NumberField
            label="Total Override"
            width="100%"
            minValue={0}
            onChange={setOverrideTotal}
            formatOptions={{
              style: "currency",
              currency: "USD",
            }}
          />
        </react_spectrum_1.Flex>
        <react_spectrum_1.Flex direction="column" gap="size-100">
          <react_spectrum_1.Flex gap="size-100">
            <react_spectrum_1.Heading
              level={4}
              margin="0"
              marginStart="24"
              width="100%"
            >
              Desired Tip
            </react_spectrum_1.Heading>
          </react_spectrum_1.Flex>
          <react_spectrum_1.Flex gap="size-100">
            <react_spectrum_1.ToggleButton
              flex="1"
              isEmphasized
              isSelected={newTipPercent === 15}
              onPress={function () {
                return setNewTipPercent(15);
              }}
            >
              15
            </react_spectrum_1.ToggleButton>
            <react_spectrum_1.ToggleButton
              flex="1"
              isEmphasized
              isSelected={newTipPercent === 18}
              onPress={function () {
                return setNewTipPercent(18);
              }}
            >
              18
            </react_spectrum_1.ToggleButton>
            <react_spectrum_1.ToggleButton
              flex="1"
              isEmphasized
              isSelected={newTipPercent === 20}
              onPress={function () {
                return setNewTipPercent(20);
              }}
            >
              20
            </react_spectrum_1.ToggleButton>
          </react_spectrum_1.Flex>
          <react_spectrum_1.Flex width="100%" gap="size-100">
            <react_spectrum_1.Badge variant="positive" width="50%">
              <react_spectrum_1.Flex direction="column" width="100%">
                <react_spectrum_1.Text>
                  New Tip
                  <react_spectrum_1.Heading level={2} margin="0">
                    {"$".concat(newTip)}
                  </react_spectrum_1.Heading>
                </react_spectrum_1.Text>
              </react_spectrum_1.Flex>
            </react_spectrum_1.Badge>
            <react_spectrum_1.Flex direction="column" width="50%">
              <react_spectrum_1.Text>New Total</react_spectrum_1.Text>
              <react_spectrum_1.Heading level={2} margin="0">
                {"$".concat(getNewTotal())}
              </react_spectrum_1.Heading>
            </react_spectrum_1.Flex>
          </react_spectrum_1.Flex>
        </react_spectrum_1.Flex>
      </react_spectrum_1.Flex>
    </div>
  );
};
exports.App = App;
exports["default"] = exports.App;
