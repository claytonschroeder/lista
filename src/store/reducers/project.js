// importing the action types and a updateObject helper

// import * as actionTypes from '../actions/actionTypes';
// import { updateObject } from '../utility';

const initialState = {
    treeData: [
        {
          id: '542e53c0-d09b-11e7-b8e6-4d392cabc9a3',
          hide: false,
          controls: {
            description: {
              active: true,
              label: 'Description',
              elementType: 'textarea',
              elementConfig: {
                type: 'text',
                placeholder: ''
              },
              value: '',
              validation: {
                required: true
              },
              valid: false,
              touched: false
            },
            performanceMeasure: {
              active: true,
              label: 'Performance Measure',
              elementType: 'text',
              elementConfig: {
                type: 'text',
                placeholder: ''
              },
              value: '',
              validation: {
                required: true
              },
              valid: false,
              touched: false
            },
            units: {
              active: true,
              label: 'Units',
              elementType: 'text',
              elementConfig: {
                type: 'text',
                placeholder: ''
              },
              value: '',
              validation: {
                required: true
              },
              valid: false,
              touched: false
            },
            direction: {
              active: true,
              label: 'Direction',
              elementType: 'select',
              elementConfig: {
                options: [
                  {
                    value: 'higher is better',
                    displayValue: 'Higher is Better'
                  },
                  {
                    value: 'lower is better',
                    displayValue: 'Lower is Better'
                  }
                ]
              },
              value: 'higher is better',
              validation: {},
              valid: true
            },
            msic: {
              active: true,
              label: 'MSIC Type',
              elementType: 'select',
              elementConfig: {
                options: [
                  {
                    value: 'relative',
                    displayValue: 'Relative'
                  },
                  {
                    value: 'absolute',
                    displayValue: 'Absolute'
                  }
                ]
              },
              value: 'relative',
              validation: {},
              valid: true
            },
            type: {
              active: true,
              label: 'MSIC Value',
              elementType: 'select',
              elementConfig: {
                options: [
                  {
                    value: 0.1,
                    displayValue: '0.1'
                  }
                ]
              },
              value: 0.1,
              validation: {},
              valid: true
            },
            uncertainty: {
              active: true,
              label: 'Uncertainty',
              elementType: 'select',
              elementConfig: {
                options: [
                  {
                    value: 'none',
                    displayValue: 'None'
                  },
                  {
                    value: 1,
                    displayValue: '1 pt'
                  },
                  {
                    value: 2,
                    displayValue: '2 pt'
                  },
                  {
                    value: 3,
                    displayValue: '3 pt'
                  }
                ]
              },
              value: 'none',
              validation: {},
              valid: true
            },
            format: {
              active: true,
              label: 'Format',
              elementType: 'select',
              elementConfig: {
                options: [
                  {
                    value: 'text',
                    displayValue: 'Text'
                  },
                  {
                    value: 'number',
                    displayValue: 'Number'
                  },
                  {
                    value: 'currency',
                    displayValue: 'Currency'
                  },
                  {
                    value: 'date',
                    displayValue: 'Date'
                  },
                  {
                    value: 'percentage',
                    displayValue: 'Percentage'
                  }
                ]
              },
              value: 'text',
              validation: {},
              valid: true
            },
            valueFuntion: {
              active: true,
              label: 'Value Function',
              elementType: 'select',
              elementConfig: {
                options: [
                  {
                    value: 'positive',
                    displayValue: 'Positive Linear'
                  },
                  {
                    value: 'negative',
                    displayValue: 'Negative Linear'
                  },
                  {
                    value: 'bell',
                    displayValue: 'Bell'
                  }
                ]
              },
              value: 'positive',
              validation: {},
              valid: true
            },
            dataType: {
              active: true,
              label: 'Data Type',
              elementType: 'select',
              elementConfig: {
                options: [
                  {
                    value: 'continuous',
                    displayValue: 'Continuous'
                  },
                  {
                    value: 'categorical',
                    displayValue: 'Categorical'
                  },
                  {
                    value: 'interval',
                    displayValue: 'Interval'
                  }
                ]
              },
              value: 'continuous',
              validation: {},
              valid: true
            }
          },
          title: 'Objective 1',
          expanded: true,
          children: [
            {
              id: '5cf3a870-d09b-11e7-b8e6-4d392cabc9a3',
              hide: false,
              controls: {
                description: {
                  active: true,
                  label: 'Description',
                  elementType: 'textarea',
                  elementConfig: {
                    type: 'text',
                    placeholder: ''
                  },
                  value: '',
                  validation: {
                    required: true
                  },
                  valid: false,
                  touched: false
                },
                performanceMeasure: {
                  active: true,
                  label: 'Performance Measure',
                  elementType: 'text',
                  elementConfig: {
                    type: 'text',
                    placeholder: ''
                  },
                  value: '',
                  validation: {
                    required: true
                  },
                  valid: false,
                  touched: false
                },
                units: {
                  active: true,
                  label: 'Units',
                  elementType: 'text',
                  elementConfig: {
                    type: 'text',
                    placeholder: ''
                  },
                  value: '',
                  validation: {
                    required: true
                  },
                  valid: false,
                  touched: false
                },
                direction: {
                  active: true,
                  label: 'Direction',
                  elementType: 'select',
                  elementConfig: {
                    options: [
                      {
                        value: 'higher is better',
                        displayValue: 'Higher is Better'
                      },
                      {
                        value: 'lower is better',
                        displayValue: 'Lower is Better'
                      }
                    ]
                  },
                  value: 'higher is better',
                  validation: {},
                  valid: true
                },
                msic: {
                  active: true,
                  label: 'MSIC Type',
                  elementType: 'select',
                  elementConfig: {
                    options: [
                      {
                        value: 'relative',
                        displayValue: 'Relative'
                      },
                      {
                        value: 'absolute',
                        displayValue: 'Absolute'
                      }
                    ]
                  },
                  value: 'relative',
                  validation: {},
                  valid: true
                },
                type: {
                  active: true,
                  label: 'MSIC Value',
                  elementType: 'select',
                  elementConfig: {
                    options: [
                      {
                        value: 0.1,
                        displayValue: '0.1'
                      }
                    ]
                  },
                  value: 0.1,
                  validation: {},
                  valid: true
                },
                uncertainty: {
                  active: true,
                  label: 'Uncertainty',
                  elementType: 'select',
                  elementConfig: {
                    options: [
                      {
                        value: 'none',
                        displayValue: 'None'
                      },
                      {
                        value: 1,
                        displayValue: '1 pt'
                      },
                      {
                        value: 2,
                        displayValue: '2 pt'
                      },
                      {
                        value: 3,
                        displayValue: '3 pt'
                      }
                    ]
                  },
                  value: 'none',
                  validation: {},
                  valid: true
                },
                format: {
                  active: true,
                  label: 'Format',
                  elementType: 'select',
                  elementConfig: {
                    options: [
                      {
                        value: 'text',
                        displayValue: 'Text'
                      },
                      {
                        value: 'number',
                        displayValue: 'Number'
                      },
                      {
                        value: 'currency',
                        displayValue: 'Currency'
                      },
                      {
                        value: 'date',
                        displayValue: 'Date'
                      },
                      {
                        value: 'percentage',
                        displayValue: 'Percentage'
                      }
                    ]
                  },
                  value: 'text',
                  validation: {},
                  valid: true
                },
                valueFuntion: {
                  active: true,
                  label: 'Value Function',
                  elementType: 'select',
                  elementConfig: {
                    options: [
                      {
                        value: 'positive',
                        displayValue: 'Positive Linear'
                      },
                      {
                        value: 'negative',
                        displayValue: 'Negative Linear'
                      },
                      {
                        value: 'bell',
                        displayValue: 'Bell'
                      }
                    ]
                  },
                  value: 'positive',
                  validation: {},
                  valid: true
                },
                dataType: {
                  active: true,
                  label: 'Data Type',
                  elementType: 'select',
                  elementConfig: {
                    options: [
                      {
                        value: 'continuous',
                        displayValue: 'Continuous'
                      },
                      {
                        value: 'categorical',
                        displayValue: 'Categorical'
                      },
                      {
                        value: 'interval',
                        displayValue: 'Interval'
                      }
                    ]
                  },
                  value: 'continuous',
                  validation: {},
                  valid: true
                }
              },
              title: 'Objective 1.1'
            },
            {
              id: '5ebd1dd0-d09b-11e7-b8e6-4d392cabc9a3',
              hide: false,
              controls: {
                description: {
                  active: true,
                  label: 'Description',
                  elementType: 'textarea',
                  elementConfig: {
                    type: 'text',
                    placeholder: ''
                  },
                  value: '',
                  validation: {
                    required: true
                  },
                  valid: false,
                  touched: false
                },
                performanceMeasure: {
                  active: true,
                  label: 'Performance Measure',
                  elementType: 'text',
                  elementConfig: {
                    type: 'text',
                    placeholder: ''
                  },
                  value: '',
                  validation: {
                    required: true
                  },
                  valid: false,
                  touched: false
                },
                units: {
                  active: true,
                  label: 'Units',
                  elementType: 'text',
                  elementConfig: {
                    type: 'text',
                    placeholder: ''
                  },
                  value: '',
                  validation: {
                    required: true
                  },
                  valid: false,
                  touched: false
                },
                direction: {
                  active: true,
                  label: 'Direction',
                  elementType: 'select',
                  elementConfig: {
                    options: [
                      {
                        value: 'higher is better',
                        displayValue: 'Higher is Better'
                      },
                      {
                        value: 'lower is better',
                        displayValue: 'Lower is Better'
                      }
                    ]
                  },
                  value: 'higher is better',
                  validation: {},
                  valid: true
                },
                msic: {
                  active: true,
                  label: 'MSIC Type',
                  elementType: 'select',
                  elementConfig: {
                    options: [
                      {
                        value: 'relative',
                        displayValue: 'Relative'
                      },
                      {
                        value: 'absolute',
                        displayValue: 'Absolute'
                      }
                    ]
                  },
                  value: 'relative',
                  validation: {},
                  valid: true
                },
                type: {
                  active: true,
                  label: 'MSIC Value',
                  elementType: 'select',
                  elementConfig: {
                    options: [
                      {
                        value: 0.1,
                        displayValue: '0.1'
                      }
                    ]
                  },
                  value: 0.1,
                  validation: {},
                  valid: true
                },
                uncertainty: {
                  active: true,
                  label: 'Uncertainty',
                  elementType: 'select',
                  elementConfig: {
                    options: [
                      {
                        value: 'none',
                        displayValue: 'None'
                      },
                      {
                        value: 1,
                        displayValue: '1 pt'
                      },
                      {
                        value: 2,
                        displayValue: '2 pt'
                      },
                      {
                        value: 3,
                        displayValue: '3 pt'
                      }
                    ]
                  },
                  value: 'none',
                  validation: {},
                  valid: true
                },
                format: {
                  active: true,
                  label: 'Format',
                  elementType: 'select',
                  elementConfig: {
                    options: [
                      {
                        value: 'text',
                        displayValue: 'Text'
                      },
                      {
                        value: 'number',
                        displayValue: 'Number'
                      },
                      {
                        value: 'currency',
                        displayValue: 'Currency'
                      },
                      {
                        value: 'date',
                        displayValue: 'Date'
                      },
                      {
                        value: 'percentage',
                        displayValue: 'Percentage'
                      }
                    ]
                  },
                  value: 'text',
                  validation: {},
                  valid: true
                },
                valueFuntion: {
                  active: true,
                  label: 'Value Function',
                  elementType: 'select',
                  elementConfig: {
                    options: [
                      {
                        value: 'positive',
                        displayValue: 'Positive Linear'
                      },
                      {
                        value: 'negative',
                        displayValue: 'Negative Linear'
                      },
                      {
                        value: 'bell',
                        displayValue: 'Bell'
                      }
                    ]
                  },
                  value: 'positive',
                  validation: {},
                  valid: true
                },
                dataType: {
                  active: true,
                  label: 'Data Type',
                  elementType: 'select',
                  elementConfig: {
                    options: [
                      {
                        value: 'continuous',
                        displayValue: 'Continuous'
                      },
                      {
                        value: 'categorical',
                        displayValue: 'Categorical'
                      },
                      {
                        value: 'interval',
                        displayValue: 'Interval'
                      }
                    ]
                  },
                  value: 'continuous',
                  validation: {},
                  valid: true
                }
              },
              title: 'Objective 1.2'
            },
            {
              id: '6e03f1b0-d09b-11e7-b8e6-4d392cabc9a3',
              hide: false,
              controls: {
                description: {
                  active: true,
                  label: 'Description',
                  elementType: 'textarea',
                  elementConfig: {
                    type: 'text',
                    placeholder: ''
                  },
                  value: '',
                  validation: {
                    required: true
                  },
                  valid: false,
                  touched: false
                },
                performanceMeasure: {
                  active: true,
                  label: 'Performance Measure',
                  elementType: 'text',
                  elementConfig: {
                    type: 'text',
                    placeholder: ''
                  },
                  value: '',
                  validation: {
                    required: true
                  },
                  valid: false,
                  touched: false
                },
                units: {
                  active: true,
                  label: 'Units',
                  elementType: 'text',
                  elementConfig: {
                    type: 'text',
                    placeholder: ''
                  },
                  value: '',
                  validation: {
                    required: true
                  },
                  valid: false,
                  touched: false
                },
                direction: {
                  active: true,
                  label: 'Direction',
                  elementType: 'select',
                  elementConfig: {
                    options: [
                      {
                        value: 'higher is better',
                        displayValue: 'Higher is Better'
                      },
                      {
                        value: 'lower is better',
                        displayValue: 'Lower is Better'
                      }
                    ]
                  },
                  value: 'higher is better',
                  validation: {},
                  valid: true
                },
                msic: {
                  active: true,
                  label: 'MSIC Type',
                  elementType: 'select',
                  elementConfig: {
                    options: [
                      {
                        value: 'relative',
                        displayValue: 'Relative'
                      },
                      {
                        value: 'absolute',
                        displayValue: 'Absolute'
                      }
                    ]
                  },
                  value: 'relative',
                  validation: {},
                  valid: true
                },
                type: {
                  active: true,
                  label: 'MSIC Value',
                  elementType: 'select',
                  elementConfig: {
                    options: [
                      {
                        value: 0.1,
                        displayValue: '0.1'
                      }
                    ]
                  },
                  value: 0.1,
                  validation: {},
                  valid: true
                },
                uncertainty: {
                  active: true,
                  label: 'Uncertainty',
                  elementType: 'select',
                  elementConfig: {
                    options: [
                      {
                        value: 'none',
                        displayValue: 'None'
                      },
                      {
                        value: 1,
                        displayValue: '1 pt'
                      },
                      {
                        value: 2,
                        displayValue: '2 pt'
                      },
                      {
                        value: 3,
                        displayValue: '3 pt'
                      }
                    ]
                  },
                  value: 'none',
                  validation: {},
                  valid: true
                },
                format: {
                  active: true,
                  label: 'Format',
                  elementType: 'select',
                  elementConfig: {
                    options: [
                      {
                        value: 'text',
                        displayValue: 'Text'
                      },
                      {
                        value: 'number',
                        displayValue: 'Number'
                      },
                      {
                        value: 'currency',
                        displayValue: 'Currency'
                      },
                      {
                        value: 'date',
                        displayValue: 'Date'
                      },
                      {
                        value: 'percentage',
                        displayValue: 'Percentage'
                      }
                    ]
                  },
                  value: 'text',
                  validation: {},
                  valid: true
                },
                valueFuntion: {
                  active: true,
                  label: 'Value Function',
                  elementType: 'select',
                  elementConfig: {
                    options: [
                      {
                        value: 'positive',
                        displayValue: 'Positive Linear'
                      },
                      {
                        value: 'negative',
                        displayValue: 'Negative Linear'
                      },
                      {
                        value: 'bell',
                        displayValue: 'Bell'
                      }
                    ]
                  },
                  value: 'positive',
                  validation: {},
                  valid: true
                },
                dataType: {
                  active: true,
                  label: 'Data Type',
                  elementType: 'select',
                  elementConfig: {
                    options: [
                      {
                        value: 'continuous',
                        displayValue: 'Continuous'
                      },
                      {
                        value: 'categorical',
                        displayValue: 'Categorical'
                      },
                      {
                        value: 'interval',
                        displayValue: 'Interval'
                      }
                    ]
                  },
                  value: 'continuous',
                  validation: {},
                  valid: true
                }
              },
              title: 'Objective 1.3'
            }
          ]
        },
        {
          id: '575695d0-d09b-11e7-b8e6-4d392cabc9a3',
          hide: false,
          controls: {
            description: {
              active: true,
              label: 'Description',
              elementType: 'textarea',
              elementConfig: {
                type: 'text',
                placeholder: ''
              },
              value: '',
              validation: {
                required: true
              },
              valid: false,
              touched: false
            },
            performanceMeasure: {
              active: true,
              label: 'Performance Measure',
              elementType: 'text',
              elementConfig: {
                type: 'text',
                placeholder: ''
              },
              value: '',
              validation: {
                required: true
              },
              valid: false,
              touched: false
            },
            units: {
              active: true,
              label: 'Units',
              elementType: 'text',
              elementConfig: {
                type: 'text',
                placeholder: ''
              },
              value: '',
              validation: {
                required: true
              },
              valid: false,
              touched: false
            },
            direction: {
              active: true,
              label: 'Direction',
              elementType: 'select',
              elementConfig: {
                options: [
                  {
                    value: 'higher is better',
                    displayValue: 'Higher is Better'
                  },
                  {
                    value: 'lower is better',
                    displayValue: 'Lower is Better'
                  }
                ]
              },
              value: 'higher is better',
              validation: {},
              valid: true
            },
            msic: {
              active: true,
              label: 'MSIC Type',
              elementType: 'select',
              elementConfig: {
                options: [
                  {
                    value: 'relative',
                    displayValue: 'Relative'
                  },
                  {
                    value: 'absolute',
                    displayValue: 'Absolute'
                  }
                ]
              },
              value: 'relative',
              validation: {},
              valid: true
            },
            type: {
              active: true,
              label: 'MSIC Value',
              elementType: 'select',
              elementConfig: {
                options: [
                  {
                    value: 0.1,
                    displayValue: '0.1'
                  }
                ]
              },
              value: 0.1,
              validation: {},
              valid: true
            },
            uncertainty: {
              active: true,
              label: 'Uncertainty',
              elementType: 'select',
              elementConfig: {
                options: [
                  {
                    value: 'none',
                    displayValue: 'None'
                  },
                  {
                    value: 1,
                    displayValue: '1 pt'
                  },
                  {
                    value: 2,
                    displayValue: '2 pt'
                  },
                  {
                    value: 3,
                    displayValue: '3 pt'
                  }
                ]
              },
              value: 'none',
              validation: {},
              valid: true
            },
            format: {
              active: true,
              label: 'Format',
              elementType: 'select',
              elementConfig: {
                options: [
                  {
                    value: 'text',
                    displayValue: 'Text'
                  },
                  {
                    value: 'number',
                    displayValue: 'Number'
                  },
                  {
                    value: 'currency',
                    displayValue: 'Currency'
                  },
                  {
                    value: 'date',
                    displayValue: 'Date'
                  },
                  {
                    value: 'percentage',
                    displayValue: 'Percentage'
                  }
                ]
              },
              value: 'text',
              validation: {},
              valid: true
            },
            valueFuntion: {
              active: true,
              label: 'Value Function',
              elementType: 'select',
              elementConfig: {
                options: [
                  {
                    value: 'positive',
                    displayValue: 'Positive Linear'
                  },
                  {
                    value: 'negative',
                    displayValue: 'Negative Linear'
                  },
                  {
                    value: 'bell',
                    displayValue: 'Bell'
                  }
                ]
              },
              value: 'positive',
              validation: {},
              valid: true
            },
            dataType: {
              active: true,
              label: 'Data Type',
              elementType: 'select',
              elementConfig: {
                options: [
                  {
                    value: 'continuous',
                    displayValue: 'Continuous'
                  },
                  {
                    value: 'categorical',
                    displayValue: 'Categorical'
                  },
                  {
                    value: 'interval',
                    displayValue: 'Interval'
                  }
                ]
              },
              value: 'continuous',
              validation: {},
              valid: true
            }
          },
          title: 'Objective 2',
          expanded: true,
          children: [
            {
              id: '605aa130-d09b-11e7-b8e6-4d392cabc9a3',
              hide: false,
              controls: {
                description: {
                  active: true,
                  label: 'Description',
                  elementType: 'textarea',
                  elementConfig: {
                    type: 'text',
                    placeholder: ''
                  },
                  value: '',
                  validation: {
                    required: true
                  },
                  valid: false,
                  touched: false
                },
                performanceMeasure: {
                  active: true,
                  label: 'Performance Measure',
                  elementType: 'text',
                  elementConfig: {
                    type: 'text',
                    placeholder: ''
                  },
                  value: '',
                  validation: {
                    required: true
                  },
                  valid: false,
                  touched: false
                },
                units: {
                  active: true,
                  label: 'Units',
                  elementType: 'text',
                  elementConfig: {
                    type: 'text',
                    placeholder: ''
                  },
                  value: '',
                  validation: {
                    required: true
                  },
                  valid: false,
                  touched: false
                },
                direction: {
                  active: true,
                  label: 'Direction',
                  elementType: 'select',
                  elementConfig: {
                    options: [
                      {
                        value: 'higher is better',
                        displayValue: 'Higher is Better'
                      },
                      {
                        value: 'lower is better',
                        displayValue: 'Lower is Better'
                      }
                    ]
                  },
                  value: 'higher is better',
                  validation: {},
                  valid: true
                },
                msic: {
                  active: true,
                  label: 'MSIC Type',
                  elementType: 'select',
                  elementConfig: {
                    options: [
                      {
                        value: 'relative',
                        displayValue: 'Relative'
                      },
                      {
                        value: 'absolute',
                        displayValue: 'Absolute'
                      }
                    ]
                  },
                  value: 'relative',
                  validation: {},
                  valid: true
                },
                type: {
                  active: true,
                  label: 'MSIC Value',
                  elementType: 'select',
                  elementConfig: {
                    options: [
                      {
                        value: 0.1,
                        displayValue: '0.1'
                      }
                    ]
                  },
                  value: 0.1,
                  validation: {},
                  valid: true
                },
                uncertainty: {
                  active: true,
                  label: 'Uncertainty',
                  elementType: 'select',
                  elementConfig: {
                    options: [
                      {
                        value: 'none',
                        displayValue: 'None'
                      },
                      {
                        value: 1,
                        displayValue: '1 pt'
                      },
                      {
                        value: 2,
                        displayValue: '2 pt'
                      },
                      {
                        value: 3,
                        displayValue: '3 pt'
                      }
                    ]
                  },
                  value: 'none',
                  validation: {},
                  valid: true
                },
                format: {
                  active: true,
                  label: 'Format',
                  elementType: 'select',
                  elementConfig: {
                    options: [
                      {
                        value: 'text',
                        displayValue: 'Text'
                      },
                      {
                        value: 'number',
                        displayValue: 'Number'
                      },
                      {
                        value: 'currency',
                        displayValue: 'Currency'
                      },
                      {
                        value: 'date',
                        displayValue: 'Date'
                      },
                      {
                        value: 'percentage',
                        displayValue: 'Percentage'
                      }
                    ]
                  },
                  value: 'text',
                  validation: {},
                  valid: true
                },
                valueFuntion: {
                  active: true,
                  label: 'Value Function',
                  elementType: 'select',
                  elementConfig: {
                    options: [
                      {
                        value: 'positive',
                        displayValue: 'Positive Linear'
                      },
                      {
                        value: 'negative',
                        displayValue: 'Negative Linear'
                      },
                      {
                        value: 'bell',
                        displayValue: 'Bell'
                      }
                    ]
                  },
                  value: 'positive',
                  validation: {},
                  valid: true
                },
                dataType: {
                  active: true,
                  label: 'Data Type',
                  elementType: 'select',
                  elementConfig: {
                    options: [
                      {
                        value: 'continuous',
                        displayValue: 'Continuous'
                      },
                      {
                        value: 'categorical',
                        displayValue: 'Categorical'
                      },
                      {
                        value: 'interval',
                        displayValue: 'Interval'
                      }
                    ]
                  },
                  value: 'continuous',
                  validation: {},
                  valid: true
                }
              },
              title: 'Objective 2.1'
            },
            {
              id: '628ff7c0-d09b-11e7-b8e6-4d392cabc9a3',
              hide: false,
              controls: {
                description: {
                  active: true,
                  label: 'Description',
                  elementType: 'textarea',
                  elementConfig: {
                    type: 'text',
                    placeholder: ''
                  },
                  value: '',
                  validation: {
                    required: true
                  },
                  valid: false,
                  touched: false
                },
                performanceMeasure: {
                  active: true,
                  label: 'Performance Measure',
                  elementType: 'text',
                  elementConfig: {
                    type: 'text',
                    placeholder: ''
                  },
                  value: '',
                  validation: {
                    required: true
                  },
                  valid: false,
                  touched: false
                },
                units: {
                  active: true,
                  label: 'Units',
                  elementType: 'text',
                  elementConfig: {
                    type: 'text',
                    placeholder: ''
                  },
                  value: '',
                  validation: {
                    required: true
                  },
                  valid: false,
                  touched: false
                },
                direction: {
                  active: true,
                  label: 'Direction',
                  elementType: 'select',
                  elementConfig: {
                    options: [
                      {
                        value: 'higher is better',
                        displayValue: 'Higher is Better'
                      },
                      {
                        value: 'lower is better',
                        displayValue: 'Lower is Better'
                      }
                    ]
                  },
                  value: 'higher is better',
                  validation: {},
                  valid: true
                },
                msic: {
                  active: true,
                  label: 'MSIC Type',
                  elementType: 'select',
                  elementConfig: {
                    options: [
                      {
                        value: 'relative',
                        displayValue: 'Relative'
                      },
                      {
                        value: 'absolute',
                        displayValue: 'Absolute'
                      }
                    ]
                  },
                  value: 'relative',
                  validation: {},
                  valid: true
                },
                type: {
                  active: true,
                  label: 'MSIC Value',
                  elementType: 'select',
                  elementConfig: {
                    options: [
                      {
                        value: 0.1,
                        displayValue: '0.1'
                      }
                    ]
                  },
                  value: 0.1,
                  validation: {},
                  valid: true
                },
                uncertainty: {
                  active: true,
                  label: 'Uncertainty',
                  elementType: 'select',
                  elementConfig: {
                    options: [
                      {
                        value: 'none',
                        displayValue: 'None'
                      },
                      {
                        value: 1,
                        displayValue: '1 pt'
                      },
                      {
                        value: 2,
                        displayValue: '2 pt'
                      },
                      {
                        value: 3,
                        displayValue: '3 pt'
                      }
                    ]
                  },
                  value: 'none',
                  validation: {},
                  valid: true
                },
                format: {
                  active: true,
                  label: 'Format',
                  elementType: 'select',
                  elementConfig: {
                    options: [
                      {
                        value: 'text',
                        displayValue: 'Text'
                      },
                      {
                        value: 'number',
                        displayValue: 'Number'
                      },
                      {
                        value: 'currency',
                        displayValue: 'Currency'
                      },
                      {
                        value: 'date',
                        displayValue: 'Date'
                      },
                      {
                        value: 'percentage',
                        displayValue: 'Percentage'
                      }
                    ]
                  },
                  value: 'text',
                  validation: {},
                  valid: true
                },
                valueFuntion: {
                  active: true,
                  label: 'Value Function',
                  elementType: 'select',
                  elementConfig: {
                    options: [
                      {
                        value: 'positive',
                        displayValue: 'Positive Linear'
                      },
                      {
                        value: 'negative',
                        displayValue: 'Negative Linear'
                      },
                      {
                        value: 'bell',
                        displayValue: 'Bell'
                      }
                    ]
                  },
                  value: 'positive',
                  validation: {},
                  valid: true
                },
                dataType: {
                  active: true,
                  label: 'Data Type',
                  elementType: 'select',
                  elementConfig: {
                    options: [
                      {
                        value: 'continuous',
                        displayValue: 'Continuous'
                      },
                      {
                        value: 'categorical',
                        displayValue: 'Categorical'
                      },
                      {
                        value: 'interval',
                        displayValue: 'Interval'
                      }
                    ]
                  },
                  value: 'continuous',
                  validation: {},
                  valid: true
                }
              },
              title: 'Objective 2.2'
            }
          ]
        },
        {
          id: '577df3f0-d09b-11e7-b8e6-4d392cabc9a3',
          hide: false,
          controls: {
            description: {
              active: true,
              label: 'Description',
              elementType: 'textarea',
              elementConfig: {
                type: 'text',
                placeholder: ''
              },
              value: '',
              validation: {
                required: true
              },
              valid: false,
              touched: false
            },
            performanceMeasure: {
              active: true,
              label: 'Performance Measure',
              elementType: 'text',
              elementConfig: {
                type: 'text',
                placeholder: ''
              },
              value: '',
              validation: {
                required: true
              },
              valid: false,
              touched: false
            },
            units: {
              active: true,
              label: 'Units',
              elementType: 'text',
              elementConfig: {
                type: 'text',
                placeholder: ''
              },
              value: '',
              validation: {
                required: true
              },
              valid: false,
              touched: false
            },
            direction: {
              active: true,
              label: 'Direction',
              elementType: 'select',
              elementConfig: {
                options: [
                  {
                    value: 'higher is better',
                    displayValue: 'Higher is Better'
                  },
                  {
                    value: 'lower is better',
                    displayValue: 'Lower is Better'
                  }
                ]
              },
              value: 'higher is better',
              validation: {},
              valid: true
            },
            msic: {
              active: true,
              label: 'MSIC Type',
              elementType: 'select',
              elementConfig: {
                options: [
                  {
                    value: 'relative',
                    displayValue: 'Relative'
                  },
                  {
                    value: 'absolute',
                    displayValue: 'Absolute'
                  }
                ]
              },
              value: 'relative',
              validation: {},
              valid: true
            },
            type: {
              active: true,
              label: 'MSIC Value',
              elementType: 'select',
              elementConfig: {
                options: [
                  {
                    value: 0.1,
                    displayValue: '0.1'
                  }
                ]
              },
              value: 0.1,
              validation: {},
              valid: true
            },
            uncertainty: {
              active: true,
              label: 'Uncertainty',
              elementType: 'select',
              elementConfig: {
                options: [
                  {
                    value: 'none',
                    displayValue: 'None'
                  },
                  {
                    value: 1,
                    displayValue: '1 pt'
                  },
                  {
                    value: 2,
                    displayValue: '2 pt'
                  },
                  {
                    value: 3,
                    displayValue: '3 pt'
                  }
                ]
              },
              value: 'none',
              validation: {},
              valid: true
            },
            format: {
              active: true,
              label: 'Format',
              elementType: 'select',
              elementConfig: {
                options: [
                  {
                    value: 'text',
                    displayValue: 'Text'
                  },
                  {
                    value: 'number',
                    displayValue: 'Number'
                  },
                  {
                    value: 'currency',
                    displayValue: 'Currency'
                  },
                  {
                    value: 'date',
                    displayValue: 'Date'
                  },
                  {
                    value: 'percentage',
                    displayValue: 'Percentage'
                  }
                ]
              },
              value: 'text',
              validation: {},
              valid: true
            },
            valueFuntion: {
              active: true,
              label: 'Value Function',
              elementType: 'select',
              elementConfig: {
                options: [
                  {
                    value: 'positive',
                    displayValue: 'Positive Linear'
                  },
                  {
                    value: 'negative',
                    displayValue: 'Negative Linear'
                  },
                  {
                    value: 'bell',
                    displayValue: 'Bell'
                  }
                ]
              },
              value: 'positive',
              validation: {},
              valid: true
            },
            dataType: {
              active: true,
              label: 'Data Type',
              elementType: 'select',
              elementConfig: {
                options: [
                  {
                    value: 'continuous',
                    displayValue: 'Continuous'
                  },
                  {
                    value: 'categorical',
                    displayValue: 'Categorical'
                  },
                  {
                    value: 'interval',
                    displayValue: 'Interval'
                  }
                ]
              },
              value: 'continuous',
              validation: {},
              valid: true
            }
          },
          title: 'Objective 3',
          expanded: true,
          children: [
            {
              id: '644548e0-d09b-11e7-b8e6-4d392cabc9a3',
              hide: false,
              controls: {
                description: {
                  active: true,
                  label: 'Description',
                  elementType: 'textarea',
                  elementConfig: {
                    type: 'text',
                    placeholder: ''
                  },
                  value: '',
                  validation: {
                    required: true
                  },
                  valid: false,
                  touched: false
                },
                performanceMeasure: {
                  active: true,
                  label: 'Performance Measure',
                  elementType: 'text',
                  elementConfig: {
                    type: 'text',
                    placeholder: ''
                  },
                  value: '',
                  validation: {
                    required: true
                  },
                  valid: false,
                  touched: false
                },
                units: {
                  active: true,
                  label: 'Units',
                  elementType: 'text',
                  elementConfig: {
                    type: 'text',
                    placeholder: ''
                  },
                  value: '',
                  validation: {
                    required: true
                  },
                  valid: false,
                  touched: false
                },
                direction: {
                  active: true,
                  label: 'Direction',
                  elementType: 'select',
                  elementConfig: {
                    options: [
                      {
                        value: 'higher is better',
                        displayValue: 'Higher is Better'
                      },
                      {
                        value: 'lower is better',
                        displayValue: 'Lower is Better'
                      }
                    ]
                  },
                  value: 'higher is better',
                  validation: {},
                  valid: true
                },
                msic: {
                  active: true,
                  label: 'MSIC Type',
                  elementType: 'select',
                  elementConfig: {
                    options: [
                      {
                        value: 'relative',
                        displayValue: 'Relative'
                      },
                      {
                        value: 'absolute',
                        displayValue: 'Absolute'
                      }
                    ]
                  },
                  value: 'relative',
                  validation: {},
                  valid: true
                },
                type: {
                  active: true,
                  label: 'MSIC Value',
                  elementType: 'select',
                  elementConfig: {
                    options: [
                      {
                        value: 0.1,
                        displayValue: '0.1'
                      }
                    ]
                  },
                  value: 0.1,
                  validation: {},
                  valid: true
                },
                uncertainty: {
                  active: true,
                  label: 'Uncertainty',
                  elementType: 'select',
                  elementConfig: {
                    options: [
                      {
                        value: 'none',
                        displayValue: 'None'
                      },
                      {
                        value: 1,
                        displayValue: '1 pt'
                      },
                      {
                        value: 2,
                        displayValue: '2 pt'
                      },
                      {
                        value: 3,
                        displayValue: '3 pt'
                      }
                    ]
                  },
                  value: 'none',
                  validation: {},
                  valid: true
                },
                format: {
                  active: true,
                  label: 'Format',
                  elementType: 'select',
                  elementConfig: {
                    options: [
                      {
                        value: 'text',
                        displayValue: 'Text'
                      },
                      {
                        value: 'number',
                        displayValue: 'Number'
                      },
                      {
                        value: 'currency',
                        displayValue: 'Currency'
                      },
                      {
                        value: 'date',
                        displayValue: 'Date'
                      },
                      {
                        value: 'percentage',
                        displayValue: 'Percentage'
                      }
                    ]
                  },
                  value: 'text',
                  validation: {},
                  valid: true
                },
                valueFuntion: {
                  active: true,
                  label: 'Value Function',
                  elementType: 'select',
                  elementConfig: {
                    options: [
                      {
                        value: 'positive',
                        displayValue: 'Positive Linear'
                      },
                      {
                        value: 'negative',
                        displayValue: 'Negative Linear'
                      },
                      {
                        value: 'bell',
                        displayValue: 'Bell'
                      }
                    ]
                  },
                  value: 'positive',
                  validation: {},
                  valid: true
                },
                dataType: {
                  active: true,
                  label: 'Data Type',
                  elementType: 'select',
                  elementConfig: {
                    options: [
                      {
                        value: 'continuous',
                        displayValue: 'Continuous'
                      },
                      {
                        value: 'categorical',
                        displayValue: 'Categorical'
                      },
                      {
                        value: 'interval',
                        displayValue: 'Interval'
                      }
                    ]
                  },
                  value: 'continuous',
                  validation: {},
                  valid: true
                }
              },
              title: 'Objective 3.1'
            },
            {
              id: '68bb1990-d09b-11e7-b8e6-4d392cabc9a3',
              hide: false,
              controls: {
                description: {
                  active: true,
                  label: 'Description',
                  elementType: 'textarea',
                  elementConfig: {
                    type: 'text',
                    placeholder: ''
                  },
                  value: '',
                  validation: {
                    required: true
                  },
                  valid: false,
                  touched: false
                },
                performanceMeasure: {
                  active: true,
                  label: 'Performance Measure',
                  elementType: 'text',
                  elementConfig: {
                    type: 'text',
                    placeholder: ''
                  },
                  value: '',
                  validation: {
                    required: true
                  },
                  valid: false,
                  touched: false
                },
                units: {
                  active: true,
                  label: 'Units',
                  elementType: 'text',
                  elementConfig: {
                    type: 'text',
                    placeholder: ''
                  },
                  value: '',
                  validation: {
                    required: true
                  },
                  valid: false,
                  touched: false
                },
                direction: {
                  active: true,
                  label: 'Direction',
                  elementType: 'select',
                  elementConfig: {
                    options: [
                      {
                        value: 'higher is better',
                        displayValue: 'Higher is Better'
                      },
                      {
                        value: 'lower is better',
                        displayValue: 'Lower is Better'
                      }
                    ]
                  },
                  value: 'higher is better',
                  validation: {},
                  valid: true
                },
                msic: {
                  active: true,
                  label: 'MSIC Type',
                  elementType: 'select',
                  elementConfig: {
                    options: [
                      {
                        value: 'relative',
                        displayValue: 'Relative'
                      },
                      {
                        value: 'absolute',
                        displayValue: 'Absolute'
                      }
                    ]
                  },
                  value: 'relative',
                  validation: {},
                  valid: true
                },
                type: {
                  active: true,
                  label: 'MSIC Value',
                  elementType: 'select',
                  elementConfig: {
                    options: [
                      {
                        value: 0.1,
                        displayValue: '0.1'
                      }
                    ]
                  },
                  value: 0.1,
                  validation: {},
                  valid: true
                },
                uncertainty: {
                  active: true,
                  label: 'Uncertainty',
                  elementType: 'select',
                  elementConfig: {
                    options: [
                      {
                        value: 'none',
                        displayValue: 'None'
                      },
                      {
                        value: 1,
                        displayValue: '1 pt'
                      },
                      {
                        value: 2,
                        displayValue: '2 pt'
                      },
                      {
                        value: 3,
                        displayValue: '3 pt'
                      }
                    ]
                  },
                  value: 'none',
                  validation: {},
                  valid: true
                },
                format: {
                  active: true,
                  label: 'Format',
                  elementType: 'select',
                  elementConfig: {
                    options: [
                      {
                        value: 'text',
                        displayValue: 'Text'
                      },
                      {
                        value: 'number',
                        displayValue: 'Number'
                      },
                      {
                        value: 'currency',
                        displayValue: 'Currency'
                      },
                      {
                        value: 'date',
                        displayValue: 'Date'
                      },
                      {
                        value: 'percentage',
                        displayValue: 'Percentage'
                      }
                    ]
                  },
                  value: 'text',
                  validation: {},
                  valid: true
                },
                valueFuntion: {
                  active: true,
                  label: 'Value Function',
                  elementType: 'select',
                  elementConfig: {
                    options: [
                      {
                        value: 'positive',
                        displayValue: 'Positive Linear'
                      },
                      {
                        value: 'negative',
                        displayValue: 'Negative Linear'
                      },
                      {
                        value: 'bell',
                        displayValue: 'Bell'
                      }
                    ]
                  },
                  value: 'positive',
                  validation: {},
                  valid: true
                },
                dataType: {
                  active: true,
                  label: 'Data Type',
                  elementType: 'select',
                  elementConfig: {
                    options: [
                      {
                        value: 'continuous',
                        displayValue: 'Continuous'
                      },
                      {
                        value: 'categorical',
                        displayValue: 'Categorical'
                      },
                      {
                        value: 'interval',
                        displayValue: 'Interval'
                      }
                    ]
                  },
                  value: 'continuous',
                  validation: {},
                  valid: true
                }
              },
              title: 'Objective 3.2'
            }
          ]
        }
      ],
    editNode: null
};

const reducer = ( state = initialState, action ) => {
    // must return the same state or an updated version
    return state

    //example switch case to determine action. use immutable patterns for updating state.

    // switch ( action.type ) {
    //     case actionTypes.UPDATE_TREE:
    //         const mergedObj = {...action.treeData, ...action.editNode}
    //         return updateObject(state, mergedObj);
    //     case actionTypes.CHANGE_EDIT_NODE:
    //         return updateObject(state, action.editNode);
    //     default: return state
    // }
};

export default reducer;