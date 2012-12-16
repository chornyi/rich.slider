var RichSlider = new Class({

    Implements: Options,

    options: {
        duration: 30,
        imageUrl: null,
        parentId: null,
        text: null,
        imageWidth: 324,
        imageHeight: 220,
        textHeight: 40,
        slideDuration: 250
    },

    image: null,

    initialize: function(options){
        this.setOptions(options);

        var containerElement = new Element('a', {
            'class': 'rs-container',
            'href': this.options.targetUrl,
            'styles': {
                width: this.options.imageWidth + 'px',
                height: this.options.imageHeight + 'px'
            }
        });

        containerElement.inject(this.options.parentId);

        var table = new Element('table', {
            'class': 'rs-table',
            styles: {
                'top': '-' + this.options.textHeight + 'px'
            }
        });

        table.inject(containerElement);

        var tr1 = new Element('tr', {
        });

        tr1.inject(table);

        var td1 = new Element('td', {
            'html': this.options.text,
            'class': 'rs-title-cell',
            'styles': {
                height: this.options.textHeight + 'px'
            }
        });

        td1.inject(tr1);

        var tr2 = new Element('tr', {
        });

        tr2.inject(table);

        var td2 = new Element('td', {
            'class': 'rs-image-cell'
        });

        td2.inject(tr2);

        var imageElement = new Element('img', {
            'src': this.options.imageUrl,
            'alt': this.options.text,
            'class': 'rs-image',
            'styles': {
                width: this.options.imageWidth + 'px',
                height: this.options.imageHeight + 'px'
            }
        });

        imageElement.inject(td2);

        this.addEvents(table);
    },

    addEvents: function(element) {
        var slide = new Fx.Tween(element, {
            duration: this.options.slideDuration,
            transition: Fx.Transitions.expo,
            property: 'top'
        });

        element.addEvent('mouseenter', function() {
            console.log('in');
            slide.stop();
            slide.start(-this.options.textHeight, 0);
        }.bind(this));

        element.addEvent('mouseleave', function() {
            console.log('out');
            slide.stop();
            slide.start(0, -this.options.textHeight);
        }.bind(this));
    }
});
