import * as d3 from 'd3'
import { makeCompareTooltip, makeTooltip } from "../components/MovieInfo";
export function handleMouseOver(e, d, movieData) {
  if (d.id == movieData[0].id)
    return;
  d.visible = 'visible';
  const htmlString = makeCompareTooltip(d, movieData);
  d3.select('#tooltip').style('visibility', 'visible')
    .html(htmlString)
}
export function handleMouseLeave(e, d, movieData, keepCompareOpen) {
  e.preventDefault();
  d.visible = 'hidden';
  if (keepCompareOpen) return;
  const mainMovie = movieData[0].movieData;
  makeTooltip(mainMovie);
}
export async function handleClick(e, d, setSelectedMovie, keepCompareOpen, movieData) {
  setSelectedMovie(d.id);
  handleMouseLeave(e, d, movieData, keepCompareOpen)
}
export function makeDrag(update) {
  const drag = d3.drag()
    .on('drag', (e, d) => {
      e.subject.fx = e.x;
      e.subject.fy = e.y;
      update();
    })
    .on('end', (e, d) => {
      e.subject.fx = null;
      e.subject.fy = null;
    });
  return drag;
}
