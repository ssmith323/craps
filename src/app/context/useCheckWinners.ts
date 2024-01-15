import { useContext } from "react";
import { GameContext } from "./GameContext";
import { HARDWAYS_BETS, PLACE_BETS, FIELD_BETS } from "./bets";

export enum BetResults {
  PAY = "PAY",
  STAY = "STAY",
  COLLECT = "COLLECT",
}

interface IHardwayResults {
  four: BetResults;
  six: BetResults;
  eight: BetResults;
  ten: BetResults;
}

export interface IGameResults {
  pass: BetResults;
  field: BetResults;
  odds: BetResults;
  place: BetResults;
  hardways: IHardwayResults;
  crapOut: boolean;
}

const init: IGameResults = {
  pass: BetResults.STAY,
  field: BetResults.STAY,
  odds: BetResults.STAY,
  place: BetResults.STAY,
  hardways: {
    four: BetResults.STAY,
    six: BetResults.STAY,
    eight: BetResults.STAY,
    ten: BetResults.STAY,
  },
  crapOut: false,
};

const hardwaysCheck = (die1: number, die2: number) => {
  const hardways: IHardwayResults = {
    four: BetResults.STAY,
    six: BetResults.STAY,
    eight: BetResults.STAY,
    ten: BetResults.STAY,
  };
  for (const [key, value] of HARDWAYS_BETS.entries()) {
    if (key === die1 + die2) {
      if (die1 == die2) {
        (hardways as any)[value] = BetResults.PAY;
      } else {
        (hardways as any)[value] = BetResults.COLLECT;
      }
    }
  }
  return hardways;
};

export const useCheckWinners = () => {
  const { die1, die2, point, setPoint } = useContext(GameContext);
  const check = (): IGameResults => {
    let results = { ...init };
    const totalRoll = die1 + die2;

    if (point == null) {
      if (totalRoll === 7 || totalRoll === 11) {
        results.pass = BetResults.PAY;
      } else if (PLACE_BETS.some((num) => num === totalRoll)) {
        setPoint(totalRoll);
      } else {
        results.pass = BetResults.COLLECT;
      }
    }
    if (point != null) {
      if (totalRoll === 7) {
        setPoint(null);
        return {
          pass: BetResults.COLLECT,
          field: BetResults.COLLECT,
          odds: BetResults.COLLECT,
          place: BetResults.COLLECT,
          hardways: {
            four: BetResults.COLLECT,
            six: BetResults.COLLECT,
            eight: BetResults.COLLECT,
            ten: BetResults.COLLECT,
          },
          crapOut: true,
        };
      } else if (totalRoll === point) {
        setPoint(null);
        results.pass = BetResults.PAY;
        results.odds = BetResults.PAY;
      }
      if (PLACE_BETS.some((num) => num === totalRoll)) {
        results.place = BetResults.PAY;
      }
    }
    if (FIELD_BETS.some((num) => num === totalRoll)) {
      results.field = BetResults.PAY;
    } else {
      results.field = BetResults.COLLECT;
    }

    results.hardways = hardwaysCheck(die1, die2);

    return results;
  };

  return check;
};
