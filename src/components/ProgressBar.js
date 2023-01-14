// import store
import { useItemStore } from '../store';

function ProgressBar() {
  const item = useItemStore().item;
  const pickupedItem = item.filter(item => item.checked === true).length;
  const percentage = (pickupedItem / item.length) * 100;
  return(
    <progress class={percentage === 100 ? "block progress is-success is-small" : "block progress is-info is-small"} value={percentage} max="100">45%</progress>
  );
}

export default ProgressBar;
