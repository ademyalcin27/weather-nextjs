import { Condition } from "@/model/weather";

export interface DegreeProps {
  condition: Condition;
  tempC: number;
}

export function Degree({condition, tempC}: DegreeProps){
    return(
      <div>
        <p className="text-5xl text-white">
          {tempC.toFixed()}
          <span>°</span>
        </p>
      <span className="text-white">{condition.text}</span>
    </div>
    ) 
}