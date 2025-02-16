import { Component, ElementRef, AfterViewInit } from '@angular/core';
import * as d3 from 'd3';

@Component({
  selector: 'app-graphing',
  imports: [],
  templateUrl: './graphing.component.html',
  styleUrl: './graphing.component.scss'
})
export class GraphingComponent {

  data: number[] = [];
  private svg: any;
  private width = 400;
  private height = 200;
  private margin = { top: 20, right: 30, bottom: 40, left: 40 };

  constructor(private chartContainer: ElementRef) {}

  ngAfterViewInit(): void {
    this.createChart();
  }

  private createChart(): void {
    const element = this.chartContainer.nativeElement;
    const container = d3.select(element.querySelector('.chart-container'));
    container.selectAll('*').remove(); // Limpiar el gráfico antes de actualizar

    this.svg = container.append('svg')
      .attr('width', this.width + this.margin.left + this.margin.right)
      .attr('height', this.height + this.margin.top + this.margin.bottom)
      .append('g')
      .attr('transform', `translate(${this.margin.left},${this.margin.top})`);

    this.updateChart();
  }

  private updateChart(): void {
    const x = d3.scaleLinear()
      .domain([0, d3.max(this.data)!])
      .range([0, this.width]);

    const y = d3.scaleBand()
      .domain(this.data.map(d => d.toString()))
      .range([0, this.height])
      .padding(0.1);

    // Crear barras
    const bars = this.svg.selectAll('rect').data(this.data);

    bars.enter()
      .append('rect')
      .merge(bars)
      .attr('x', 0)
      .attr('y', (d: number) => y(d.toString())!)
      .attr('width', (d: number) => x(d))
      .attr('height', y.bandwidth())
      .attr('fill', 'steelblue');

    // Etiquetas
    const texts = this.svg.selectAll('text').data(this.data);

    texts.enter()
      .append('text')
      .merge(texts)
      .attr('x', (d: number) => x(d) - 25)
      .attr('y', (d: number) => y(d.toString())! + y.bandwidth() / 2)
      .attr('dy', '0.35em')
      .attr('fill', 'white')
      .attr('text-anchor', 'end')
      .text((d: number) => d);
  }

  updateData(newData: string): void {
    this.data = newData.split(',').map(d => +d);
    this.createChart(); // Volver a dibujar el gráfico con los nuevos datos
  }
}

