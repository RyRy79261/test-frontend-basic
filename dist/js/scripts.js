"use strict";
'use strict';

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var EditProfileComponent = function (_HTMLElement) {
    _inherits(EditProfileComponent, _HTMLElement);

    function EditProfileComponent() {
        _classCallCheck(this, EditProfileComponent);

        return _possibleConstructorReturn(this, (EditProfileComponent.__proto__ || Object.getPrototypeOf(EditProfileComponent)).call(this));
    }

    return EditProfileComponent;
}(HTMLElement);

document.registerElement('app-edit-profile', EditProfileComponent);
'use strict';

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var PeopleComponent = function (_HTMLElement) {
    _inherits(PeopleComponent, _HTMLElement);

    function PeopleComponent() {
        _classCallCheck(this, PeopleComponent);

        return _possibleConstructorReturn(this, (PeopleComponent.__proto__ || Object.getPrototypeOf(PeopleComponent)).call(this));
    }

    return PeopleComponent;
}(HTMLElement);

document.registerElement('app-people', PeopleComponent);
'use strict';

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ProfileComponent = function (_HTMLElement) {
    _inherits(ProfileComponent, _HTMLElement);

    function ProfileComponent() {
        _classCallCheck(this, ProfileComponent);

        return _possibleConstructorReturn(this, (ProfileComponent.__proto__ || Object.getPrototypeOf(ProfileComponent)).call(this));
    }

    return ProfileComponent;
}(HTMLElement);

document.registerElement('app-profile', ProfileComponent);
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var template = '\n<header>\n    <div id="back" class="icon">\n    </div>\n    <div id="title" class="heading">\n        Profile\n    </div>\n    <div id="menu">\n        <div class="inner"></div>\n    </div>\n<header>\n';

var HeaderComponent = function (_HTMLElement) {
    _inherits(HeaderComponent, _HTMLElement);

    function HeaderComponent() {
        _classCallCheck(this, HeaderComponent);

        return _possibleConstructorReturn(this, (HeaderComponent.__proto__ || Object.getPrototypeOf(HeaderComponent)).call(this));
    }

    _createClass(HeaderComponent, [{
        key: 'createdCallback',
        value: function createdCallback() {
            this.createShadowRoot().innerHTML = template;
        }
    }, {
        key: 'title',
        get: function get() {
            var title = this.attributes('title');
            return title ? title : "Title not set";
        },
        set: function set(val) {
            this.setAttribute('title', val);
        }
    }]);

    return HeaderComponent;
}(HTMLElement);

document.registerElement('app-header', HeaderComponent);

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2pzL2NvbXBvbmVudHMvZWRpdC1wZXJzb24vZWRpdC1wZXJzb24tY29tcG9uZW50LmpzIiwiLi4vLi4vanMvY29tcG9uZW50cy9wZW9wbGUvcGVvcGxlLWNvbXBvbmVudC5qcyIsIi4uLy4uL2pzL2NvbXBvbmVudHMvcHJvZmlsZS9wcm9maWxlLWNvbXBvbmVudC5qcyIsIi4uLy4uL2pzL3NoYXJlZC9tYXN0ZXItZWxlbWVudHMvaGVhZGVyLWNvbXBvbmVudC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7SUFBTSxvQjs7O0FBQ0Ysb0NBQWE7QUFBQTs7QUFBQTtBQUVaOzs7RUFIOEIsVzs7QUFNbkMsU0FBUyxlQUFULENBQXlCLGtCQUF6QixFQUE4QyxvQkFBOUM7Ozs7Ozs7OztJQ05NLGU7OztBQUNGLCtCQUFhO0FBQUE7O0FBQUE7QUFFWjs7O0VBSHlCLFc7O0FBTzlCLFNBQVMsZUFBVCxDQUF5QixZQUF6QixFQUF1QyxlQUF2Qzs7Ozs7Ozs7O0lDUE0sZ0I7OztBQUNGLGdDQUFhO0FBQUE7O0FBQUE7QUFFWjs7O0VBSDBCLFc7O0FBTy9CLFNBQVMsZUFBVCxDQUF5QixhQUF6QixFQUF5QyxnQkFBekM7Ozs7Ozs7Ozs7O0FDUEEsSUFBSSx3TkFBSjs7SUFjTSxlOzs7QUFDRiwrQkFBYTtBQUFBOztBQUFBO0FBRVo7Ozs7MENBRWlCO0FBQ2QsaUJBQUssZ0JBQUwsR0FBd0IsU0FBeEIsR0FBb0MsUUFBcEM7QUFFSDs7OzRCQUVVO0FBQ1AsZ0JBQUksUUFBUSxLQUFLLFVBQUwsQ0FBZ0IsT0FBaEIsQ0FBWjtBQUNBLG1CQUFPLFFBQVEsS0FBUixHQUFnQixlQUF2QjtBQUNILFM7MEJBRVMsRyxFQUFJO0FBQ1YsaUJBQUssWUFBTCxDQUFrQixPQUFsQixFQUE0QixHQUE1QjtBQUNIOzs7O0VBakJ5QixXOztBQW9COUIsU0FBUyxlQUFULENBQXlCLFlBQXpCLEVBQXdDLGVBQXhDIiwiZmlsZSI6InNjcmlwdHMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJjbGFzcyBFZGl0UHJvZmlsZUNvbXBvbmVudCBleHRlbmRzIEhUTUxFbGVtZW50e1xyXG4gICAgY29uc3RydWN0b3IoKXtcclxuICAgICAgICBzdXBlcigpO1xyXG4gICAgfVxyXG59XHJcblxyXG5kb2N1bWVudC5yZWdpc3RlckVsZW1lbnQoJ2FwcC1lZGl0LXByb2ZpbGUnLCAgRWRpdFByb2ZpbGVDb21wb25lbnQpOyIsImNsYXNzIFBlb3BsZUNvbXBvbmVudCBleHRlbmRzIEhUTUxFbGVtZW50e1xyXG4gICAgY29uc3RydWN0b3IoKXtcclxuICAgICAgICBzdXBlcigpO1xyXG4gICAgfVxyXG5cclxufVxyXG5cclxuZG9jdW1lbnQucmVnaXN0ZXJFbGVtZW50KCdhcHAtcGVvcGxlJywgUGVvcGxlQ29tcG9uZW50KTsgIiwiY2xhc3MgUHJvZmlsZUNvbXBvbmVudCBleHRlbmRzIEhUTUxFbGVtZW50e1xyXG4gICAgY29uc3RydWN0b3IoKXtcclxuICAgICAgICBzdXBlcigpO1xyXG4gICAgfVxyXG4gICAgIFxyXG59XHJcblxyXG5kb2N1bWVudC5yZWdpc3RlckVsZW1lbnQoJ2FwcC1wcm9maWxlJywgIFByb2ZpbGVDb21wb25lbnQpOyIsImxldCB0ZW1wbGF0ZSA9YFxyXG48aGVhZGVyPlxyXG4gICAgPGRpdiBpZD1cImJhY2tcIiBjbGFzcz1cImljb25cIj5cclxuICAgIDwvZGl2PlxyXG4gICAgPGRpdiBpZD1cInRpdGxlXCIgY2xhc3M9XCJoZWFkaW5nXCI+XHJcbiAgICAgICAgUHJvZmlsZVxyXG4gICAgPC9kaXY+XHJcbiAgICA8ZGl2IGlkPVwibWVudVwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJpbm5lclwiPjwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbjxoZWFkZXI+XHJcbmBcclxuXHJcblxyXG5jbGFzcyBIZWFkZXJDb21wb25lbnQgZXh0ZW5kcyBIVE1MRWxlbWVudHtcclxuICAgIGNvbnN0cnVjdG9yKCl7XHJcbiAgICAgICAgc3VwZXIoKTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgY3JlYXRlZENhbGxiYWNrKCkge1xyXG4gICAgICAgIHRoaXMuY3JlYXRlU2hhZG93Um9vdCgpLmlubmVySFRNTCA9IHRlbXBsYXRlO1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBnZXQgdGl0bGUoKXtcclxuICAgICAgICBsZXQgdGl0bGUgPSB0aGlzLmF0dHJpYnV0ZXMoJ3RpdGxlJyk7XHJcbiAgICAgICAgcmV0dXJuIHRpdGxlID8gdGl0bGUgOiBcIlRpdGxlIG5vdCBzZXRcIjtcclxuICAgIH1cclxuXHJcbiAgICBzZXQgdGl0bGUodmFsKXtcclxuICAgICAgICB0aGlzLnNldEF0dHJpYnV0ZSgndGl0bGUnLCAgdmFsKTtcclxuICAgIH1cclxufVxyXG5cclxuZG9jdW1lbnQucmVnaXN0ZXJFbGVtZW50KCdhcHAtaGVhZGVyJywgIEhlYWRlckNvbXBvbmVudCk7Il19