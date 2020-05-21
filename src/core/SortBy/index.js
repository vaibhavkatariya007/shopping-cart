import React from 'react';
import {Modal, Radio} from 'antd';
import './sortby.css';

const Sorting_Options = [
  {
    name: 'Price -- High Low',
    value: 'highToLow',
  },
  {
    name: 'Price -- Low High',
    value: 'lowToHigh',
  },
  {
    name: 'Discount',
    value: 'discount',
  },
];

const SortBy = ({sortVisible, onSortVisible, onSortby, sortBy}) => {
  return (
    <div className="sorting">
      <span className="label">Sort By</span>
      {Sorting_Options.map((sort, index) => (
        <span
          key={index}
          className={`sortby ${sortBy == sort.value && 'active'}`}
          onClick={() => onSortby(sort.value)}>
          {sort.name}
        </span>
      ))}

      <Modal
        title="Sort By"
        visible={sortVisible}
        footer={null}
        onCancel={onSortVisible}>
        <Radio.Group
          onChange={e => {
            onSortby(e.target.value);
            onSortVisible();
          }}
          value={sortBy}>
          {Sorting_Options.map((sort, index) => (
            <Radio key={index} value={sort.value}>
              {sort.name}
            </Radio>
          ))}
        </Radio.Group>
      </Modal>
    </div>
  );
};

export default SortBy;
