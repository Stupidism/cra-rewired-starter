import { createConnect } from 'react-redux/lib/connect/connect';
import defaultMapStateToPropsFactories from 'react-redux/lib/connect/mapDispatchToProps';
import { wrapMapToPropsFunc } from 'react-redux/lib/connect/wrapMapToProps';

import _ from 'lodash';

export const whenMapStateToPropsIsObject = stateMapper => {
  if (typeof stateMapper !== 'object') return undefined;

  const mapStateToProps = state =>
    _.mapValues(stateMapper, selector => {
      if (typeof selector === 'function') {
        return selector(state);
      }

      throw new Error(
        `Invalid selector type ${typeof selector} for stateMapper`,
      );
    });

  return wrapMapToPropsFunc(mapStateToProps, 'mapStateToProps');
};

const mapStateToPropsFactories = [
  ...defaultMapStateToPropsFactories,
  whenMapStateToPropsIsObject,
];

export default createConnect({ mapStateToPropsFactories });
