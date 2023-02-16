var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

import React, { useState, useEffect } from "react";
import { Button, Badge, Flex, defaultTheme, Provider, NumberField, Heading, View, Text, LabeledValue, ToggleButton } from "@adobe/react-spectrum";
import "./App.css";

function App() {
  var _useState = useState(20),
      _useState2 = _slicedToArray(_useState, 2),
      tipPercent = _useState2[0],
      setTipPercent = _useState2[1];

  var _useState3 = useState(0),
      _useState4 = _slicedToArray(_useState3, 2),
      tipValue = _useState4[0],
      setTipValue = _useState4[1];

  var _useState5 = useState(0),
      _useState6 = _slicedToArray(_useState5, 2),
      total = _useState6[0],
      setTotal = _useState6[1];

  var _useState7 = useState(0),
      _useState8 = _slicedToArray(_useState7, 2),
      overrideTotal = _useState8[0],
      setOverrideTotal = _useState8[1];

  var _useState9 = useState(15),
      _useState10 = _slicedToArray(_useState9, 2),
      newTipPercent = _useState10[0],
      setNewTipPercent = _useState10[1];

  var _useState11 = useState(0),
      _useState12 = _slicedToArray(_useState11, 2),
      newTip = _useState12[0],
      setNewTip = _useState12[1];

  useEffect(function () {
    calculateTotal(tipPercent, tipValue);
  }, [tipPercent, tipValue]);

  useEffect(function () {
    calculateNewTip();
  }, [overrideTotal, total, newTipPercent]);

  var subtractTip = function subtractTip() {
    return setTipPercent(Math.round(tipPercent - 1));
  };
  var addTip = function addTip() {
    return setTipPercent(Math.round(tipPercent + 1));
  };

  var calculateTotal = function calculateTotal(percent, value) {
    // percent * total = value
    // total = value/percent
    if (percent && value) {
      var realPercent = percent * 0.01;
      var calcTotal = value * 1.0 / realPercent;
      setTotal(calcTotal);
    }
  };

  var calculateNewTip = function calculateNewTip() {
    var totalToUse = overrideTotal ? overrideTotal : total;
    if (totalToUse) {
      var percent = newTipPercent * 0.01;
      var calcTip = totalToUse * 1.0 * percent;
      setNewTip(calcTip);
    }
  };

  var getNewTotal = function getNewTotal() {
    var totalToUse = overrideTotal ? overrideTotal : total;
    if (newTip && totalToUse) {
      return newTip + totalToUse;
    }

    return 0;
  };

  return React.createElement(
    Provider,
    { theme: defaultTheme, colorScheme: "dark" },
    React.createElement(
      "div",
      { className: "wrapper" },
      React.createElement(
        Flex,
        { direction: "column", width: "size-3000", gap: "size-100" },
        React.createElement(
          Flex,
          { gap: "size-100" },
          React.createElement(
            ToggleButton,
            {
              flex: "1",
              isEmphasized: true,
              isSelected: tipPercent === 20,
              onPress: function onPress() {
                return setTipPercent(20);
              }
            },
            "20"
          ),
          React.createElement(
            ToggleButton,
            {
              flex: "1",
              isEmphasized: true,
              isSelected: tipPercent === 23,
              onPress: function onPress() {
                return setTipPercent(23);
              }
            },
            "23"
          ),
          React.createElement(
            ToggleButton,
            {
              flex: "1",
              isEmphasized: true,
              isSelected: tipPercent === 25,
              onPress: function onPress() {
                return setTipPercent(25);
              }
            },
            "25"
          )
        ),
        React.createElement(
          Flex,
          { gap: "size-100" },
          React.createElement(
            Flex,
            { direction: "column", width: "100%", alignItems: "center" },
            React.createElement(
              Heading,
              { level: 2, margin: "0" },
              tipPercent + "%"
            )
          ),
          React.createElement(
            Button,
            { variant: "primary", onPress: subtractTip },
            "-"
          ),
          React.createElement(
            Button,
            { variant: "primary", onPress: addTip },
            "+"
          )
        ),
        React.createElement(
          Flex,
          { gap: "size-100" },
          React.createElement(NumberField, {
            label: "Tip $",
            width: "100%",
            minValue: 0,
            onChange: setTipValue,
            formatOptions: {
              style: "currency",
              currency: "USD"
            }
          })
        ),
        React.createElement(
          Flex,
          { gap: "size-100" },
          React.createElement(
            Flex,
            {
              UNSAFE_className: overrideTotal > 0 ? "overridden" : "",
              direction: "column",
              width: "25%"
            },
            React.createElement(
              Text,
              null,
              "Total"
            ),
            React.createElement(
              Heading,
              { level: 2, margin: "0" },
              "$" + total
            )
          ),
          overrideTotal > 0 && React.createElement(
            Flex,
            { UNSAFE_className: "override", direction: "column", width: "25%" },
            React.createElement(
              Text,
              null,
              "Override"
            ),
            React.createElement(
              Heading,
              { level: 2, margin: "0" },
              "$" + overrideTotal
            )
          ),
          React.createElement(NumberField, {
            label: "Total Override",
            width: "100%",
            minValue: 0,
            onChange: setOverrideTotal,
            formatOptions: {
              style: "currency",
              currency: "USD"
            }
          })
        ),
        React.createElement(
          Flex,
          { direction: "column", gap: "size-100" },
          React.createElement(
            Flex,
            { gap: "size-100" },
            React.createElement(
              Heading,
              { level: 4, margin: "0", marginStart: "24", width: "100%" },
              "Desired Tip"
            )
          ),
          React.createElement(
            Flex,
            { gap: "size-100" },
            React.createElement(
              ToggleButton,
              {
                flex: "1",
                isEmphasized: true,
                isSelected: newTipPercent === 15,
                onPress: function onPress() {
                  return setNewTipPercent(15);
                }
              },
              "15"
            ),
            React.createElement(
              ToggleButton,
              {
                flex: "1",
                isEmphasized: true,
                isSelected: newTipPercent === 18,
                onPress: function onPress() {
                  return setNewTipPercent(18);
                }
              },
              "18"
            ),
            React.createElement(
              ToggleButton,
              {
                flex: "1",
                isEmphasized: true,
                isSelected: newTipPercent === 20,
                onPress: function onPress() {
                  return setNewTipPercent(20);
                }
              },
              "20"
            )
          ),
          React.createElement(
            Flex,
            { width: "100%", gap: "size-100" },
            React.createElement(
              Badge,
              { variant: "positive", width: "50%" },
              React.createElement(
                Flex,
                { direction: "column", width: "100%" },
                React.createElement(
                  Text,
                  null,
                  "New Tip",
                  React.createElement(
                    Heading,
                    { level: 2, margin: "0" },
                    "$" + newTip
                  )
                )
              )
            ),
            React.createElement(
              Flex,
              { direction: "column", width: "50%" },
              React.createElement(
                Text,
                null,
                "New Total"
              ),
              React.createElement(
                Heading,
                { level: 2, margin: "0" },
                "$" + getNewTotal()
              )
            )
          )
        )
      )
    )
  );
}

export default App;