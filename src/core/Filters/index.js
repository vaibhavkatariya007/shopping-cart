import React, {useState} from 'react';
import {Slider, Button, Modal} from 'antd';
import './filters.css';
const Filters = ({
  filterVisible,
  onFilterVisible,
  onApplyFilter,
  appliedvalue,
}) => {
  const [maxValue, setMaxValue] = useState(null);
  const onClear = () => {
    setMaxValue(null);
    onApplyFilter(null);
  };
  const handleChange = value => {
    setMaxValue(value);
  };
  let disable = !maxValue;
  if (maxValue <= 1000) {
    disable = true;
  }
  return (
    <div className="filtering">
      <span className="label">Filters</span>
      <div className="filter">
        <div className="max-min-value">
          <span>&#8377; 1000</span>
          <span>&#8377; 100000</span>
        </div>
        <Slider
          min={1000}
          max={100000}
          onChange={handleChange}
          value={maxValue || 1000}
        />
        <div className="filter-type">Prices</div>
      </div>

      <Button disabled={disable} onClick={() => onApplyFilter(maxValue)}>
        Apply
      </Button>
      {maxValue && appliedvalue && (
        <Button className="reset" onClick={onClear}>
          Clear Filters
        </Button>
      )}

      <Modal
        title="Filter Options"
        visible={filterVisible}
        onOk={() => {
          onApplyFilter(maxValue);
          onFilterVisible();
        }}
        okText="Apply"
        onCancel={() => {
          setMaxValue(null);
          onApplyFilter(null);
          onFilterVisible();
        }}>
        <div className="filter">
          <div className="max-min-value">
            <span>&#8377; 1000</span>
            <span> &#8377; 100000</span>
          </div>
          <Slider
            min={1000}
            max={100000}
            onChange={handleChange}
            value={maxValue || 1000}
          />
          <div className="filter-type">Prices</div>
        </div>
      </Modal>
    </div>
  );
};

export default Filters;
