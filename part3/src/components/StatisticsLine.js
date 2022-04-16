import React from "react";

export default function StatisticsLine({ text, value }) {
  if (text === "Positive: ") {
    return (
      <>
        <tr>
          <td className="tg-0lax">
            <b>{text}</b>
          </td>
          <td className="tg-0lax">{value} %</td>
        </tr>
      </>
    );
  } else {
    return (
      <>
        <tr>
          <td className="tg-0lax">
            <b>{text}</b>
          </td>
          <td className="tg-0lax">{value}</td>
        </tr>
      </>
    );
  }
}
