package core

type AcousticbrainzError struct {
	IsAcousticbrainzError bool
	Sdk              string
	Code             string
	Msg              string
	Ctx              *Context
	Result           any
	Spec             any
}

func NewAcousticbrainzError(code string, msg string, ctx *Context) *AcousticbrainzError {
	return &AcousticbrainzError{
		IsAcousticbrainzError: true,
		Sdk:              "Acousticbrainz",
		Code:             code,
		Msg:              msg,
		Ctx:              ctx,
	}
}

func (e *AcousticbrainzError) Error() string {
	return e.Msg
}
