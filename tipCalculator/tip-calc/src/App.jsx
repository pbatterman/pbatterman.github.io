import React, { useState, useEffect } from "react";
import {
  Button,
  Badge,
  Flex,
  defaultTheme,
  Provider,
  NumberField,
  Heading,
  View,
  Text,
  LabeledValue,
  ToggleButton,
} from "@adobe/react-spectrum";
import "./App.css";

function App() {
  const [tipPercent, setTipPercent] = useState(20);
  const [tipValue, setTipValue] = useState(0);
  const [total, setTotal] = useState(0);
  const [overrideTotal, setOverrideTotal] = useState(0);
  const [newTipPercent, setNewTipPercent] = useState(15);
  const [newTip, setNewTip] = useState(0);

  useEffect(() => {
    calculateTotal(tipPercent, tipValue);
  }, [tipPercent, tipValue]);

  useEffect(() => {
    calculateNewTip();
  }, [overrideTotal, total, newTipPercent]);

  const subtractTip = () => setTipPercent(Math.round(tipPercent - 1));
  const addTip = () => setTipPercent(Math.round(tipPercent + 1));

  const calculateTotal = (percent: number, value: number) => {
    // percent * total = value
    // total = value/percent
    if (percent && value) {
      const realPercent = percent * 0.01;
      const calcTotal = (value * 1.0) / realPercent;
      setTotal(calcTotal);
    }
  };

  const calculateNewTip = () => {
    const totalToUse = overrideTotal ? overrideTotal : total;
    if (totalToUse) {
      const percent = newTipPercent * 0.01;
      const calcTip = totalToUse * 1.0 * percent;
      setNewTip(calcTip);
    }
  };

  const getNewTotal = () => {
    const totalToUse = overrideTotal ? overrideTotal : total;
    if (newTip && totalToUse) {
      return newTip + totalToUse;
    }

    return 0;
  };

  return (
    <Provider theme={defaultTheme} colorScheme="dark">
      <div className="wrapper">
        <Flex direction="column" width="size-3000" gap="size-100">
          <Flex gap="size-100">
            <ToggleButton
              flex="1"
              isEmphasized
              isSelected={tipPercent === 20}
              onPress={() => setTipPercent(20)}
            >
              20
            </ToggleButton>
            <ToggleButton
              flex="1"
              isEmphasized
              isSelected={tipPercent === 23}
              onPress={() => setTipPercent(23)}
            >
              23
            </ToggleButton>
            <ToggleButton
              flex="1"
              isEmphasized
              isSelected={tipPercent === 25}
              onPress={() => setTipPercent(25)}
            >
              25
            </ToggleButton>
          </Flex>
          <Flex gap="size-100">
            <Flex direction="column" width="100%" alignItems="center">
              <Heading level={2} margin="0">
                {`${tipPercent}%`}
              </Heading>
            </Flex>
            <Button variant="primary" onPress={subtractTip}>
              -
            </Button>
            <Button variant="primary" onPress={addTip}>
              +
            </Button>
          </Flex>
          <Flex gap="size-100">
            <NumberField
              label="Tip $"
              width="100%"
              minValue={0}
              onChange={setTipValue}
              formatOptions={{
                style: "currency",
                currency: "USD",
              }}
            />
          </Flex>
          <Flex gap="size-100">
            <Flex
              UNSAFE_className={overrideTotal > 0 ? "overridden" : ""}
              direction="column"
              width="25%"
            >
              <Text>Total</Text>
              <Heading level={2} margin="0">
                {`$${total}`}
              </Heading>
            </Flex>
            {overrideTotal > 0 && (
              <Flex UNSAFE_className="override" direction="column" width="25%">
                <Text>Override</Text>
                <Heading level={2} margin="0">
                  {`$${overrideTotal}`}
                </Heading>
              </Flex>
            )}
            <NumberField
              label="Total Override"
              width="100%"
              minValue={0}
              onChange={setOverrideTotal}
              formatOptions={{
                style: "currency",
                currency: "USD",
              }}
            />
          </Flex>
          <Flex direction="column" gap="size-100">
            <Flex gap="size-100">
              <Heading level={4} margin="0" marginStart="24" width="100%">
                Desired Tip
              </Heading>
            </Flex>
            <Flex gap="size-100">
              <ToggleButton
                flex="1"
                isEmphasized
                isSelected={newTipPercent === 15}
                onPress={() => setNewTipPercent(15)}
              >
                15
              </ToggleButton>
              <ToggleButton
                flex="1"
                isEmphasized
                isSelected={newTipPercent === 18}
                onPress={() => setNewTipPercent(18)}
              >
                18
              </ToggleButton>
              <ToggleButton
                flex="1"
                isEmphasized
                isSelected={newTipPercent === 20}
                onPress={() => setNewTipPercent(20)}
              >
                20
              </ToggleButton>
            </Flex>
            <Flex width="100%" gap="size-100">
              <Badge variant="positive" width="50%">
                <Flex direction="column" width="100%">
                  <Text>
                    New Tip
                    <Heading level={2} margin="0">
                      {`$${newTip}`}
                    </Heading>
                  </Text>
                </Flex>
              </Badge>
              <Flex direction="column" width="50%">
                <Text>New Total</Text>
                <Heading level={2} margin="0">
                  {`$${getNewTotal()}`}
                </Heading>
              </Flex>
            </Flex>
          </Flex>
        </Flex>
      </div>
    </Provider>
  );
}

export default App;
