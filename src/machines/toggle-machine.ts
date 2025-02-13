/* eslint-plugin-xstate-include */

import { setup } from "xstate";

export type ToggleEvent = { type: "TOGGLE" };

export const toggleMachine = setup({
    types: {} as {
        events: ToggleEvent;
    },
}).createMachine({
    /** @xstate-layout N4IgpgJg5mDOIC5QBcD2UoBswDoCWAdgIYDGyeAbmAMQAqA8gOKMAyAogNoAMAuoqAAdUsPOVQF+IAB6IAjAFYAbDgCcKgEyyAHAHZ5AGhABPOQGZ1AXwuG0GbDlLkqdJq069JQkWIlJpcpVUNbT1DEwQtWRx5K2sQAlQIOElbLDBPYVE8cUkZBABaRTDEQqsbdDT8YjJKdL8vLJy-PIAWdWKInWitU16+-t6ykFT7R1qM72zfUDz1LS4cU3kFRXUDY0QVBa4egb3YiyA */
    id: "toggle",
    initial: "inactive",
    states: {
        inactive: {
            on: { TOGGLE: "active"},
        },
        active: {
            on: { TOGGLE: "inactive" },
        }
    }
})