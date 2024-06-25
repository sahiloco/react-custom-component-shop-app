import Blog from "./Blog";
import PropTypes from "prop-types";
import styles from "./LatestNews.module.css";

const LatestNews = ({ className = "" }) => {
  return (
    <section className={[styles.latestNews, className].join(" ")}>
      <h1 className={styles.latestNews1}>Latest News</h1>
      <div className={styles.row}>
        <Blog
          unsplashiZVrfElG1t0="/unsplashizvrfelg1t0@2x.png"
          kevin="Kristin"
          dec2021="19Dec, 2013"
          count="453"
          praesentFringillaEratALac="Cras nisl dolor, accumsan et metus sit amet, vulputate condimentum dolor."
          suspendisseIaculisMiNecSu="Maecenas scelerisque, arcu quis tempus egestas, ligula diam molestie lectus, tincidunt malesuada arcu metus posuere metus."
        />
        <Blog
          unsplashiZVrfElG1t0="/unsplashfo7jilwjotu@2x.png"
          kevin="Robert"
          dec2021="28 Nov, 2015"
          count="738"
          praesentFringillaEratALac="Curabitur pulvinar aliquam lectus, non blandit erat mattis vitae. "
          suspendisseIaculisMiNecSu="Mauris scelerisque odio id rutrum volutpat. Pellentesque urna odio, vulputate at tortor vitae, hendrerit blandit lorem. "
          propOverflow="hidden"
          propMinWidth="84px"
        />
        <Blog
          unsplashiZVrfElG1t0="/unsplash6mnmdi1hc-y@2x.png"
          kevin="Arlene"
          dec2021="9 May, 2014"
          count="826"
          praesentFringillaEratALac="Curabitur massa orci, consectetur et blandit ac, auctor et tellus."
          suspendisseIaculisMiNecSu="Pellentesque vestibulum lorem vel gravida aliquam. Morbi porta, odio id suscipit mattis, risus augue condimentum purus."
          propOverflow="unset"
          propMinWidth="77px"
        />
      </div>
    </section>
  );
};

LatestNews.propTypes = {
  className: PropTypes.string,
};

export default LatestNews;
