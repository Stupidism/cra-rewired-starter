import { createSerializer } from 'enzyme-to-json';

import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import ShallowWrapper from 'enzyme/ShallowWrapper';
import until from 'enzyme-shallow-until';

expect.addSnapshotSerializer(createSerializer({ mode: 'deep' }));

Enzyme.configure({ adapter: new Adapter() });
ShallowWrapper.prototype.until = until;
