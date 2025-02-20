import { SlArrowRight } from "react-icons/sl"
import ReusebleComponet from "../UpperComponet/ReusebleComponet"
import exploredata from "./helperCode"

export default function Explore() {
  return (
    <>
    <div style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        width: "11%",
        padding: "8px 12px",
        fontSize: "14px",
        fontWeight: "500",
        cursor: "pointer",
        color: "#0f0f0f"
      }}>
        <p style={{ margin: "0" }}>Explore</p>
        <SlArrowRight style={{ fontSize: "18px", color: "#606060", display: "block" }} />
      </div>

      <div>
        <ReusebleComponet items={exploredata} />
      </div>
    </>
  )
}
