import Jasmine from 'jasmine';
import { SpecReporter } from 'jasmine-spec-reporter';

var jasmine = new Jasmine();
jasmine.loadConfigFile('spec/support/jasmine.json');
jasmine.execute();
jasmine.addReporter(new SpecReporter({
    
}) );
