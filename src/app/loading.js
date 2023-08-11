import './loading.css';
export default function Loading() {
  // You can add any UI inside Loading, including a Skeleton.
  return (
    <>
      <main>
        <div class="hexagon" aria-label="Animated hexagonal ripples">
          <div class="hexagon__group">
            <div class="hexagon__sector"></div>
            <div class="hexagon__sector"></div>
            <div class="hexagon__sector"></div>
            <div class="hexagon__sector"></div>
            <div class="hexagon__sector"></div>
            <div class="hexagon__sector"></div>
          </div>
          <div class="hexagon__group">
            <div class="hexagon__sector"></div>
            <div class="hexagon__sector"></div>
            <div class="hexagon__sector"></div>
            <div class="hexagon__sector"></div>
            <div class="hexagon__sector"></div>
            <div class="hexagon__sector"></div>
          </div>
          <div class="hexagon__group">
            <div class="hexagon__sector"></div>
            <div class="hexagon__sector"></div>
            <div class="hexagon__sector"></div>
            <div class="hexagon__sector"></div>
            <div class="hexagon__sector"></div>
            <div class="hexagon__sector"></div>
          </div>
          <div class="hexagon__group">
            <div class="hexagon__sector"></div>
            <div class="hexagon__sector"></div>
            <div class="hexagon__sector"></div>
            <div class="hexagon__sector"></div>
            <div class="hexagon__sector"></div>
            <div class="hexagon__sector"></div>
          </div>
          <div class="hexagon__group">
            <div class="hexagon__sector"></div>
            <div class="hexagon__sector"></div>
            <div class="hexagon__sector"></div>
            <div class="hexagon__sector"></div>
            <div class="hexagon__sector"></div>
            <div class="hexagon__sector"></div>
          </div>
          <div class="hexagon__group">
            <div class="hexagon__sector"></div>
            <div class="hexagon__sector"></div>
            <div class="hexagon__sector"></div>
            <div class="hexagon__sector"></div>
            <div class="hexagon__sector"></div>
            <div class="hexagon__sector"></div>
          </div>
        </div>
        <p aria-label="Loading">Loading</p>
      </main>
    </>
  );
}
