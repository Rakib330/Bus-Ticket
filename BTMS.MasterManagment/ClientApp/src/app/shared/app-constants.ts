export class AppConstants {
  static apiUrl: string = "http://localhost:5001/api";
  // static apiUrl:string="http://localhost:64793/api";
  static appName = "BTMS";
  static accessKey = 'EE9683F6-B0CE-49D2-B3C3-F8E6A3B2E01C';
  static navItems = [
    {
      label: 'Home',
      icon: 'home',
      link: '/home'
    },
    {

      label: 'Bus',
      icon: 'directions_bus',
      link: '/buses'

    },
    {

      label: 'Route',
      icon: 'alt_route',
      link: '/bus-routes'

    },
    {
      label: 'Schedules',
      icon: 'schedule',
      link: '/schedules'
    }
  ]
}
