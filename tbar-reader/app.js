function Model() {
    var recordLength = 996;

    var errors = {
        invalidFileLength: { message: 'Your raw file was too short to be valid.' }
    };

    var validators = {
        equals: function(validatorSpec, fieldSpec, actual) { 
            if (actual !== validatorSpec.expected.padEnd(fieldSpec.length)) {
                return {
                    message: "Value for '" + fieldSpec.name + "' invalid. '" + actual + "' did not match expected value '" + validatorSpec.expected + "'. Field begins at " + fieldSpec.humanStart + "."
                }
            }
        }
    }

    var idrFields = [
        { start: 1, end: 3, name: 'Record length', validators: [{ name: 'equals', expected: '996' }] },
        { start: 4, end: 16, name: 'Record identifier', validators: [{ name: 'equals', expected: 'IDENTREGISTER'}] },
        { start: 17, end: 26, name: 'Report specification version number', validators: [{ name:'equals', expected: 'TBARV001.0' }] },
        { start: 27, end: 37, name: 'Australian business number', validators: [] },
        { start: 38, end: 65, name: 'Date timestamp report created', validators: [] },
        { start: 66, end: 81, name: 'File reference', validators: [] },
        { start: 82, end: 281, name: 'Name', validators: [] },
        { start: 282, end: 321, name: 'Contact name', validators: [] },
        { start: 322, end: 323, name: 'Contact phone number area code', validators: [] },
        { start: 324, end: 338, name: 'Contact phone number', validators: [] },
        { start: 339, end: 376, name: 'Street address line 1', validators: [] },
        { start: 377, end: 414, name: 'Street address line 2', validators: [] },
        { start: 415, end: 441, name: 'Street address suburb, town or locality', validators: [] },
        { start: 442, end: 444, name: 'Street address state or territory', validators: [] },
        { start: 445, end: 448, name: 'Street address postcode', validators: [] },
        { start: 449, end: 498, name: 'Street address country', validators: [] },
        { start: 499, end: 574, name: 'Email address', validators: [] },
        { start: 575, end: 996, name: 'Filler', validators: [] }
    ];

    var mdrFields = [
        { start: 1, end: 3, name: 'Record length', validators: [{ name: 'equals', expected: '996' }] },
        { start: 4, end: 7, name: 'Record identifier', validators: [{ name: 'equals', expected: 'TBAM'}] },
        { start: 8, end: 18, name: 'Provider Australian business number ', validators: [] },
        { start: 19, end: 218, name: 'Provider name', validators: [] },
        { start: 219, end: 227, name: 'Member tax file number ', validators: [] },
        { start: 228, end: 242, name: 'Member title', validators: [] },
        { start: 243, end: 282, name: 'Surname or family name', validators: [] },
        { start: 283, end: 322, name: 'First given name', validators: [] },
        { start: 323, end: 362, name: 'Second given name', validators: [] },
        { start: 363, end: 364, name: 'Day of birth', validators: [] },
        { start: 365, end: 366, name: 'Month of birth', validators: [] },
        { start: 367, end: 370, name: 'Year of birth', validators: [] },
        { start: 371, end: 408, name: 'Street address line 1', validators: [] },
        { start: 409, end: 446, name: 'Street address line 2', validators: [] },
        { start: 447, end: 473, name: 'Street address suburb, town or locality', validators: [] },
        { start: 474, end: 476, name: 'Street address state or territory', validators: [] },
        { start: 477, end: 480, name: 'Street address postcode', validators: [] },
        { start: 481, end: 530, name: 'Street address country', validators: [] },
        { start: 531, end: 533, name: 'Member account type', validators: [] },
        { start: 534, end: 534, name: 'Member account status', validators: [] },
        { start: 535, end: 548, name: 'Unique superannuation identifier ', validators: [] },
        { start: 549, end: 564, name: 'Member account number', validators: [] },
        { start: 565, end: 580, name: 'Member client identifier', validators: [] },
        { start: 581, end: 583, name: 'Reporting event type', validators: [] },
        { start: 584, end: 591, name: 'Effective date', validators: [] },
        { start: 592, end: 604, name: 'Value', validators: [] },
        { start: 605, end: 613, name: '3rd party TFN', validators: [] },
        { start: 614, end: 653, name: '3rd party surname or family name', validators: [] },
        { start: 654, end: 693, name: '3rd party first given name', validators: [] },
        { start: 694, end: 733, name: '3rd party second given name', validators: [] },
        { start: 734, end: 735, name: '3rd party day of birth ', validators: [] },
        { start: 736, end: 737, name: '3rd party month of birth ', validators: [] },
        { start: 738, end: 741, name: '3rd party year of birth ', validators: [] },
        { start: 742, end: 742, name: 'Was the commutation paid directly to the member?', validators: [] },
        { start: 743, end: 743, name: 'Cancellation indicator', validators: [] },
        { start: 744, end: 996, name: 'Filler', validators: [] },
    ];

    var tdrFields = [
        { start: 1, end: 3, name: 'Record length', validators: [{ name: 'equals', expected: '996' }] },
        { start: 4, end: 13, name: 'Record identifier', validators: [{ name: 'equals', expected: 'FILE-TOTAL'}] },
        { start: 14, end: 23, name: 'Number of records on file', validators: [] },
        { start: 24, end: 996, name: 'Filler', validators: [] },
    ];

    function formatFieldSpec(fieldSpec) {
        fieldSpec.forEach(function(field) {
            field.humanStart = field.start;
            field.humanEnd = field.end;

            // Zero indexify
            field.start -= 1;
            field.end -= 1;

            // Add convenience length
            field.length = field.end - field.start + 1;
        });
    }

    function preflightFieldSpec(fieldSpec) {
        for (var i = 1; i < fieldSpec.length; i++) {
            var previous = fieldSpec[i - 1];
            var current = fieldSpec[i];
            
            if (current.start != previous.end + 1) {
                throw new Error('Invalid field spec');
            }

            if (current.start > current.end) {
                throw new Error('Invalid field spec');
            }
        }

        var sumLength = fieldSpec.reduce(function(acc, cur) {
            return acc + cur.length
        }, 0);

        if (sumLength !== recordLength) {
            throw new Error('Invalid field spec');
        }
    }

    formatFieldSpec(idrFields);
    formatFieldSpec(mdrFields);
    formatFieldSpec(tdrFields);

    preflightFieldSpec(idrFields);
    preflightFieldSpec(mdrFields);
    preflightFieldSpec(tdrFields);

    function split(raw) {
        var idr = raw.slice(0, recordLength);
        var tdr = raw.slice(raw.length - recordLength);
        var mdr = raw.slice(recordLength, recordLength + raw.length - idr.length - tdr.length);

        return {
            idr: idr, tdr: tdr, mdr: mdr
        }
    }

    function deserializeFields(section, fieldSpecs, options) {
        var fields = [];
        var errors = [];

        for (var i = 0; i < fieldSpecs.length; i++) {
            var fieldSpec = fieldSpecs[i];
            var fieldContent = section.slice(fieldSpec.start, fieldSpec.end + 1);

            var copiedFieldSpec = JSON.parse(JSON.stringify(fieldSpec));
            copiedFieldSpec.value = fieldContent;
            fields.push(copiedFieldSpec);

            fieldSpec.validators.forEach(function(validatorSpec) {
                var validator = validators[validatorSpec.name];
                var error = validator(validatorSpec, fieldSpec, fieldContent);
                if (error) {
                    error.message = options.context.join(' – ') + ' ' + error.message;
                    errors.push(error);
                }
            });

            if (errors.length) break;
        }

        return {
            errors: errors,
            fields: fields
        };
    }

    function readIdr(idr) {
        return deserializeFields(idr, idrFields, { context: ['Intermediary Data Record'] });
    }

    function readMdr(mdr) {
        var mdrs = [];
        for (var cursor = 0; cursor < mdr.length; cursor += recordLength) {
            var mdrSlice = mdr.slice(cursor, cursor + recordLength + 1);
            var deserial = deserializeFields(mdrSlice, mdrFields, { context: ['Member Data Record'] });
            mdrs.push(deserial);
        }
        return mdrs;
    }

    function readTdr(tdr) {
        return deserializeFields(tdr, tdrFields, { context: ['File Total Data Record'] });
    }

    function deserialize(raw) {
        var errors = [];

        if (raw.length < recordLength * 2) {
            errors.push(errors.invalidFileLength);
        }

        var splits = split(raw);
        var idr = readIdr(splits.idr);
        var mdr = readMdr(splits.mdr);
        var tdr = readTdr(splits.tdr);

        if (idr.errors) errors = errors.concat(idr.errors);
        if (tdr.errors) errors = errors.concat(tdr.errors);
        
        mdr.forEach(function(entry) {
            if (entry.errors) errors = errors.concat(entry.errors);
        });

        return {
            errors: errors,
            idr: idr,
            mdr: { errors: [], fields: mdr },
            tdr: tdr
        }
    }

    return {
        deserialize: deserialize,
        idrFieldSpec: function() { return idrFields },
        tdrFieldSpec: function() { return tdrFields },
        mdrFieldSpec: function() { return mdrFields },
    }
}

function View() {
    function renderErrors(errors) {
        $('#error-content').empty();
        var $ul = $('<ul>');

        errors.forEach(function(error) {
            var $li = $('<li>');
            $li.text(error.message || 'An error occurred when reading the TBAR file');
            $ul.append($li);
        });

        $('#error-content').append($ul);
    }

    function fillEmptyTable($table, fieldSpec) {
        renderKeyColumn($table, fieldSpec.map(function(f) { return f.name }));
        appendValueColumn($table, fieldSpec.map(function(f) { return ''; }));
    }

    function renderKeyColumn($table, keys) {
        keys.forEach(function(key) {
            var $tr = $('<tr>');
            $tr.append($('<td>').text(key));
            $table.append($tr);
        });
    }

    function removeLastValueColumn($table) {
        $table.find('tr td:last-child').remove();
    }

    function appendValueColumn($table, values) {
        var $trs = $table.find('tr');
        var $tds = values.map(function(val) { return $('<td>').html(val.value || '<em>No value</em>') });

        $trs.each(function(index) {
            $(this).append($tds[index]);
        });
    }

    function renderNewTable($container, append) {
        var $table = $('<table class="table table-bordered"></table>')
        if (!append) $container.empty();
        $container.append($table);
        return $table;
    }

    function renderEmpty(viewModel) {
        renderErrors([]);

        var $idrTable = renderNewTable($('#idr-section-table-container'));
        var $mdrTable = renderNewTable($('#mdr-section-table-container'));
        var $tdrTable = renderNewTable($('#tdr-section-table-container'));

        fillEmptyTable($idrTable, viewModel.idr.fieldSpec);
        fillEmptyTable($mdrTable, viewModel.mdr.fieldSpec);
        fillEmptyTable($tdrTable, viewModel.tdr.fieldSpec);
    }

    function renderAsNewColumn(viewModel) {
        appendValueColumn($('#idr-section-table-container table'), viewModel.idr.rows[0]);
        appendValueColumn($('#tdr-section-table-container table'), viewModel.tdr.rows[0]);
        fillMdrTables($('#mdr-section-table-container table'), viewModel, true);
    }

    function fillMdrTables($mdrTables, viewModel, append) {
        viewModel.mdr.rows.forEach(function(entry, index) {
            var $table = $($mdrTables.get(index));
            
            if ($table.length == 0) {
                var $header = $('<h3>').text('Member Data Record Entry ' + (index + 1));
                $('#mdr-section-table-container').append($header);
                $table = renderNewTable($('#mdr-section-table-container'), true);
                fillEmptyTable($table, viewModel.mdr.fieldSpec);
            }

            if (!append) removeLastValueColumn($table);
            appendValueColumn($table, entry.fields);
        });
    }
    
    function renderContent(viewModel) {
        renderEmpty(viewModel);

        removeLastValueColumn($('#idr-section-table-container table'));
        appendValueColumn($('#idr-section-table-container table'), viewModel.idr.rows[0]);

        removeLastValueColumn($('#tdr-section-table-container table'));
        appendValueColumn($('#tdr-section-table-container table'), viewModel.tdr.rows[0]);

        fillMdrTables($('#mdr-section-table-container table'), viewModel);
    }

    return {
        renderErrors: renderErrors,
        renderEmpty: renderEmpty,
        renderContent: renderContent,
        renderAsNewColumn: renderAsNewColumn
    }
}

function Controller(model, view) {
    function bind() {
        view.renderEmpty({
            idr: { fieldSpec: model.idrFieldSpec() },
            tdr: { fieldSpec: model.tdrFieldSpec() },
            mdr: { fieldSpec: model.mdrFieldSpec() }
        });

        $('#add-column-button').click(function() {
            var raw = $('#raw-tbar-record').val();
            var deserialized = model.deserialize(raw);

            if (deserialized.errors.length) {
                view.renderErrors(deserialized.errors);
                return;
            }

            view.renderAsNewColumn({
                idr: { 
                    rows: [ deserialized.idr.fields ],
                    fieldSpec: model.idrFieldSpec()
                },
                tdr: {
                    rows: [ deserialized.tdr.fields ],
                    fieldSpec: model.tdrFieldSpec()
                },
                mdr: {
                    rows: deserialized.mdr.fields,
                    fieldSpec: model.mdrFieldSpec()
                }
            });
        })

        $('#convert-button').click(function() {
            var raw = $('#raw-tbar-record').val();
            var deserialized = model.deserialize(raw);

            if (deserialized.errors.length) {
                view.renderErrors(deserialized.errors);
                return;
            }

            view.renderContent({
                idr: { 
                    rows: [ deserialized.idr.fields ],
                    fieldSpec: model.idrFieldSpec()
                },
                tdr: {
                    rows: [ deserialized.tdr.fields ],
                    fieldSpec: model.tdrFieldSpec()
                },
                mdr: {
                    rows: deserialized.mdr.fields,
                    fieldSpec: model.mdrFieldSpec()
                }
            });
        });
    }

    return {
        bind: bind
    }
}


