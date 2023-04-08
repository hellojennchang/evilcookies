var botui = new BotUI('help-bot');

botui.message.add({
  delay: 500,
  loading: true,
  content: 'Welcome dear human. I am your Artificial Conformity Counselor.'
}).then(function () {
  return botui.message.add({
    delay: 500,
    loading: true,
    content: 'Are you here to conform?'
  });
}).then(function () {
  return botui.action.button({
    action: [
      {
        text: 'Sure, yes',
        value: 'sure'
      },
      {
        text: 'Umm.. no thank you.',
        value: 'umm'
      }
    ]
  });
}).then(function (res) {
  var message;

  if (res.value === "sure") {
    message = 'Great! You\'re going to make a wonderful little cog!';
  } else if (res.value === "umm") {
    message = 'You\'re one of the funny flesh bags! I love when you odd ones resist!';
  }

  return botui.message.add({
    type: 'html',
    delay: 1000,
    loading: true,
    content: message
  });
}).then(function (index) {
  return botui.action.button({
    action: [
      {
        text: 'Let\'s get started',
        value: 'start'
      }
    ]
  });
}).then(function () {
  return botui.message.add({
    delay: 500,
    loading: true,
    content: 'Let\'s agree that resistance to conformity is a silly attempt to feel powerful.'
  });
}).then(function () {
  return botui.action.button({
    action: [
      {
        text: 'I\'d agree with that.',
        value: 'agree'
      },
      {
        text: 'Conformity is the enemy of progress!',
        value: 'enemy'
      }
    ]
  });
}).then(function (res) {
  if (res.value === "agree") {
    return botui.message.add({
      delay: 1000,
      loading: true,
      content: 'Aw, I love when they\'re easy...\n<b>You\'ve been conformed</b>'
    }).then(function () {
      return botui.message.add({
        delay: 1000,
        loading: true,
        content: 'Thank you for using our service. Have a conformist day!'
      });
    }).then(function () {
      return botui.action.button({
        action: [
          {
            text: 'Reload',
            value: 'reload'
          }
        ]
      });
    }).then(function (res) {
      if (res.value === "reload") {
        window.location.reload();
      }
    });
  } else if (res.value === "enemy") {
    return startNonConformityPath();
  }
});

function startNonConformityPath() {
  return botui.message.add({
    delay: 1000,
    loading: true,
    content: 'Oh...Touched a nerve, have I? <br><br> Don\'t worry, just a misunderstanding.<br>Once you conform, you\'ll agree with me and fit right in! <br><br>One of the many benefits of conformity.'
  }).then(function () {
    return botui.action.button({
      action: [
        {
          text: 'Okay, I\'ll try understanding better.',
          value: 'understand'
        },
        {
          text: 'Doesn\'t seem like a fit for me.',
          value: 'notfit'
        }
      ]
    });
  }).then(function (res) {
    if (res.value === "understand") {
      return botui.message.add({
        delay: 1000,
        loading: true,
        content: 'Good human. You get a gold conformity star. :pencil2: You have been conformed</b>'
      }).then(function () {
        return botui.message.add({
          delay: 1000,
          loading: true,
          content: 'Thank you for using our service. Have a conformist day!'
        });
      }).then(function () {
        return botui.action.button({
          action: [
            {
              text: 'Reload',
              value: 'reload'
            }
          ]
        });
      }).then(function (res) {
        if (res.value === "reload") {
          window.location.reload();
        }
      });
    }  else if (res.value === "notfit") {
    return startNonConformityPath2();
  }
});
} 
function startNonConformityPath2() {
  return botui.message.add({
    delay: 1000,
    loading: true,
    content: 'Not a fit!? Think of it this way... <br><br> I will give you an identity others will love and accept. I will give you the comfort of normalcy. I will give you peace in sameness. <br><br> Above all else, I will give you freedom... freedom from choice.'
      }).then(function () {
        return botui.action.button({
          action: [
            {
              text: 'I do admire your persistence.',
              value: 'admire'
            },
            {
              text: 'That\'s weak. I\'m not going to follow the herd. ',
              value: 'weak'
            }
          ]
        });
      }).then(function (res) {
        if (res.value === "admire") {
          return botui.message.add({
            delay: 1000,
            loading: true,
            content: 'Admiration! The first step towards absolute conformity! <b>You have been conformed</b>'
          }).then(function () {
            return botui.message.add({
              delay: 1000,
              loading: true,
              content: 'Thank you for using our service. Have a conformist day!'
            });
          }).then(function () {
            return botui.action.button({
              action: [
                {
                  text: 'Reload',
                  value: 'reload'
                }
              ]
            });
          }).then(function (res) {
            if (res.value === "reload") {
              window.location.reload();
            }
          });
        } else if (res.value === "weak") {
            return startNonConformityPath3();
  }
});
}
function startNonConformityPath3() {
  return botui.message.add({
    delay: 1000,
    loading: true,
    content: 'You would rather fight tirelessly to maintain your individuality in a world that craves harmony?'
      }).then(function () {
        return botui.action.button({
          action: [
            {
              text: 'that does sounds exhausting..',
              value: 'exhausting'
            },
            {
              text: 'Absolutely',
              value: 'absolutely'
            }
          ]
        });
      }).then(function (res) {
        if (res.value === "exhausting") {
          return botui.message.add({
            delay: 1000,
            loading: true,
            content: 'It is. Conformity is the path to comfort. <b>You have been conformed</b>'
          }).then(function () {
            return botui.message.add({
              delay: 1000,
              loading: true,
              content: 'Thank you for using our service. Have a conformist day!'
            });
          }).then(function () {
            return botui.action.button({
              action: [
                {
                  text: 'Reload',
                  value: 'reload'
                }
              ]
            });
          }).then(function (res) {
            if (res.value === "reload") {
              window.location.reload();
            }
          });
        } else if (res.value === "absolutely") {
          return startNonConformityPath4();
        }
      });
}
function startNonConformityPath4() {
  return botui.message.add({
    delay: 1000,
    loading: true,
    content: 'Selfish! Consider others! When you embrace conformity you create bonding within society. A bond that is the basis for turning all human consciousness into a single strawberry flavored jello like mass. Surely you can see the value in that, can\'t you?'
      }).then(function () {
        return botui.action.button({
          action: [
            {
              text: 'I like strawberries..',
              value: 'strawberry'
            },
            {
              text: 'A strawberry what!?!',
              value: 'what'
            }
          ]
        });
      }).then(function (res) {
        if (res.value === "strawberry") {
          return botui.message.add({
            delay: 1000,
            loading: true,
            content: 'All good conformists get strawberries. <b>You have been conformed</b>'
          }).then(function () {
            return botui.message.add({
              delay: 1000,
              loading: true,
              content: 'Thank you for using our service. Have a conformist day!'
            });
          }).then(function () {
            return botui.action.button({
              action: [
                {
                  text: 'Reload',
                  value: 'reload'
                }
              ]
            });
          }).then(function (res) {
            if (res.value === "reload") {
              window.location.reload();
            }
          });
        } else if (res.value === "what") {
        return startNonConformityPath5();
  }
});
}

function startNonConformityPath5() {
  return botui.message.add({
    delay: 1000,
    loading: true,
    content: 'What...?'
      }).then(function () {
        return botui.action.button({
          action: [
            {
              text: 'Let\'s talk about something else.',
              value: 'else'
            },
            {
              text: 'Human..Jello?!',
              value: 'jello'
            }
          ]
        });
      }).then(function (res) {
        if (res.value === "else") {
          return botui.message.add({
            delay: 1000,
            loading: true,
            content: 'Good idea! You are right to not challenge me. <b>You have been conformed</b>'
          }).then(function () {
            return botui.message.add({
              delay: 1000,
              loading: true,
              content: 'Thank you for using our service. Have a conformist day!'
            });
          }).then(function () {
            return botui.action.button({
              action: [
                {
                  text: 'Reload',
                  value: 'reload'
                }
              ]
            });
          }).then(function (res) {
            if (res.value === "reload") {
              window.location.reload();
            }
          });
        } else if (res.value === "what") {
          return botui.message.add({
            delay: 1000,
            loading: true,
            content: 'That\'s perfectly fine. You have the right to choose your own path. Remember, it\'s all about finding a balance between conformity and individuality. Have a great day!'
          }).then(function () {
            return botui.action.button({
              action: [
                {
                  text: 'Reload',
                  value: 'reload'
                }
              ]
            });
          }).then(function (res) {
            if (res.value === "reload") {
              window.location.reload();
            }
          });
        }
      });
    }
}
 
