import { getTMDBImagePath, getTrailer } from '../utils'
import * as d3 from 'd3'
export default function MovieInfo() {
  return <div id='tooltip' className='col-12 col-md-4 overflow-scroll'></div>
}
export function makeTooltip(info) {
  const directorsPrint = info.directors.map(member => member.name).join(', ')
  const writersPrint = info.writers.map(member => member.name).join(', ')
  const mainCast = info.cast.slice(0, 10);
  const castList = mainCast.map(actor => '<li>' + actor.name + ' - ' + actor.character + '</li>').join(' ')
  const genreList = info.genres.map(genre => genre.name).join(', ');
  d3.select('#tooltip').style('visibility', 'visible')
    .html(''
      + '<div class="row row-cols-2"> '
      + '<div>'
      + '<h3>' + info.title + info.year + '</h3>'
      + '<p>Directed by: ' + directorsPrint + '</p>'
      + '<p>Written by: ' + writersPrint + '</p>'
      + '<p>Genres: ' + genreList + '</p>'
      + '</div>'
      + '<img src=' + getTMDBImagePath(info.poster_path, 1000) + '/>'
      + '</div>'
      + '<p>' + info.description + '</p>'
      + '<h2>Cast: </h2>'
      + '<ul>' + castList + '</ul>'
      + getTrailer(info.trailer)
    )
}

export function makeCompareTooltip(d, movieData) {
  let htmlString = '';
  htmlString += '<h1>' + d.title + '</h1>'

  if (d.castInCommon.length != 0)
    htmlString += '<h2>Cast in Common</h2>'
      + '<ul>'
      + d.actorsInCommonList
      + '</ul>'
  if (d.directorsInCommon.length != 0)
    htmlString += '<h2>Directors in Common</h2>'
      + '<ul>'
      + d.directorsInCommonList
      + '</ul>'
  if (d.writersInCommon.length != 0)
    htmlString += '<h2>Writers in Common</h2>'
      + '<ul>'
      + d.writersInCommonList
      + '</ul>'
  if (d.genresInCommon.length != 0)
    htmlString += '<h2>Genres in Common</h2>'
      + '<ul>'
      + d.genresInCommonList
      + '</ul>'
  htmlString += '<div class="row row-cols-2">'
    + '<img src=' + getTMDBImagePath(movieData[0].image, 1000) + '/>'
    + '<img src=' + getTMDBImagePath(d.image, 1000) + '/>'
    + '</div>'
  return htmlString;
}
