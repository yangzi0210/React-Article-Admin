// 封装图表bar组件
import * as echarts from "echarts";
import { useEffect, useRef } from "react";
const chartInit = (ref, xData, yData, title) => {
  // 基于准备好的dom，初始化echarts实例
  const myChart = echarts.init(ref);
  // 绘制图表
  myChart.setOption({
    title: {
      text: title,
    },
    tooltip: {},
    xAxis: {
      data: xData,
    },
    yAxis: {},
    series: [
      {
        name: "销量",
        type: "bar",
        data: yData,
      },
    ],
  });
};

const Bar = ({ title, xData, yData, style }) => {
  const domRef = useRef();

  useEffect(() => {
    chartInit(domRef.current, xData, yData, title);
  }, [domRef, xData, yData, title]);

  return (
    <div>
      {/* 准备一个挂载节点 */}
      <div ref={domRef} style={style}></div>
    </div>
  );
};

export default Bar;
